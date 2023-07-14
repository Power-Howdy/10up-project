export const fetchMembers = async (): Promise<{ data: [] }> => {
    const response = await fetch('/api/get-members', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    const result = await response.json()
  
    return result.data
  }
  