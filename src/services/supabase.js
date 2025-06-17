import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qxjnadpmniqrepgmluqr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4am5hZHBtbmlxcmVwZ21sdXFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MzkxODQsImV4cCI6MjA2NTMxNTE4NH0.AaPWhV3GHLY89g53X50vJC8h_rqxGYwfzB6VtQAgZ2I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
