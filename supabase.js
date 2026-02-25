const SUPABASE_URL = "https://hxrzrbjxdqcktrptwuzl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4cnpyYmp4ZHFja3RycHR3dXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNDE0NzksImV4cCI6MjA4NzYxNzQ3OX0.e4KW5tmOAdZ0H5cJpncWKWvpyPwT601saxQBMzo1TpM";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
