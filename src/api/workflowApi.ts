const API_BASE_URL = import.meta.env.PROD 
  ? 'https://magical-licorice-67044e.netlify.app/.netlify/functions/api'
  : 'http://localhost:3001';

export const fetchWorkflowTransitions = async (procesoId: number, accion: string, flujo: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/transitions`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching workflow transitions:', error);
    throw error;
  }
};

export const performTransition = async (procesoId: number, accion: string, flujo: number, objId: number, userId: number) => {
  try {
    // For the mock API, we'll just return a success message
    return { success: true, message: 'Transition performed successfully' };
  } catch (error) {
    console.error('Error performing workflow transition:', error);
    throw error;
  }
};