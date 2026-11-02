import { supabase } from './supabase';

export interface ConsultationRequest {
  name: string;
  email: string;
  message?: string;
  source?: string;
}

export async function submitConsultationRequest(
  data: ConsultationRequest
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from('consultation_requests').insert({
    name: data.name,
    email: data.email,
    message: data.message ?? null,
    source: data.source ?? null,
  });

  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true };
}
