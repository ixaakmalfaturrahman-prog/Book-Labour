const supabaseUrl = 'https://vwbqbjrygfwbzhzdeohe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3YnFianJ5Z2Z3YnpoemRlb2hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNDc3MDksImV4cCI6MjA4OTkyMzcwOX0.hulsC-QsQM_3r0wF6GsOi_nghJ25I2kekTMymGRZY-M';

async function test() {
  const response = await fetch(`${supabaseUrl}/rest/v1/loans`, {
    method: 'POST',
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    },
    body: JSON.stringify({ bookId: 1, memberId: 1, loanDate: '2023-11-01', returnDate: null })
  });
  const data = await response.json();
  console.log(response.status, data);
}
test();
