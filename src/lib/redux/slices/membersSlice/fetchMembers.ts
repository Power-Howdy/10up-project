export const fetchMembers = async (): Promise<{ data: [] }> => {
    const response = await fetch('http://localhost:3000/api/get-members', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    console.log(response);
    const result = await response.json()
  
    return result
  }
  