import { json } from '@sveltejs/kit';
import supabase from '$lib/supabaseClient';

async function addTask(content) {
  const { data, error } = await supabase
    .from('tasks')
    .insert([{ content }])
    .select('*');

  if (error) {
    return { error: error.message };
  }

  return data;
}

export async function POST({ request }) {
  const { content } = await request.json();

  const result = await addTask(content);

  if (result.error) {
    return json({ error: result.error }, { status: 500 });
  }

  return json({ task: result[0] }, { status: 201 });
}