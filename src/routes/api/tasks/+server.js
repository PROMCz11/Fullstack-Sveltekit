import { json } from '@sveltejs/kit';
import supabase from '../../../lib/supabaseClient';

export async function GET() {
  const { data, error } = await supabase
    .from('tasks')
    .select('*');

  if (error) return json({ error: error.message }, { status: 500 });

  return json(data);
}