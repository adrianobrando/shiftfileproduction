import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getOrCreateUserConversions = async (userId: string) => {
  const { data, error } = await supabase
    .from('user_conversions')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error && error.code === 'PGRST116') {
    // Record not found, create new record
    const { data: newData, error: insertError } = await supabase
      .from('user_conversions')
      .insert([{ user_id: userId, conversions_count: 0 }])
      .select()
      .single();

    if (insertError) throw insertError;
    return newData;
  }

  if (error) throw error;
  return data;
};

export const incrementConversions = async (userId: string) => {
  const { data, error } = await supabase
    .from('user_conversions')
    .update({ 
      conversions_count: supabase.raw('conversions_count + 1'),
      updated_at: new Date().toISOString()
    })
    .eq('user_id', userId)
    .select()
    .single();

  if (error) throw error;
  return data;
};