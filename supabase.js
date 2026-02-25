const SUPABASE_URL = "https://hxrzrbjxdqcktrptwuzl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4cnpyYmp4ZHFja3RycHR3dXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNDE0NzksImV4cCI6MjA4NzYxNzQ3OX0.e4KW5tmOAdZ0H5cJpncWKWvpyPwT601saxQBMzo1TpM";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

function getToken() {
  const params = new URLSearchParams(window.location.search);
  return params.get("token");
}

async function init() {
  const token = getToken();

  if (!token) {
    document.body.innerHTML = "<h2>Accesso non autorizzato</h2>";
    return;
  }

  const { data, error } = await supabaseClient
    .from("families")
    .select("*")
    .eq("token", token)
    .single();

  if (error || !data) {
    document.body.innerHTML = "<h2>Invito non valido</h2>";
    return;
  }

  console.log("Famiglia:", data);
}

init();
