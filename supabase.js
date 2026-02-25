const SUPABASE_URL = "https://hxrzrbjxdqcktrptwuzl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4cnpyYmp4ZHFja3RycHR3dXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNDE0NzksImV4cCI6MjA4NzYxNzQ3OX0.e4KW5tmOAdZ0H5cJpncWKWvpyPwT601saxQBMzo1TpM";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// prende il token dall'URL
function getToken() {
  const params = new URLSearchParams(window.location.search);
  return params.get("token");
}

async function loadFamily() {
  const token = getToken();

  if (!token) {
    console.log("Nessun token trovato nell'URL");
    return;
  }

  console.log("Token trovato:", token);

  const { data, error } = await supabaseClient
    .from("families")
    .select("*")
    .eq("token", token)
    .single();

  if (error) {
    console.log("Errore:", error);
  } else {
    console.log("Famiglia caricata:", data);
  }
}

loadFamily();