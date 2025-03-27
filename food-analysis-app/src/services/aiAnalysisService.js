export async function analyzeFoodImage(imageData) {
  try {
    console.log('Starting image analysis...');
    const base64Data = imageData.startsWith('data:') 
      ? imageData.split(',')[1] 
      : imageData;

    const webhookUrl = import.meta.env.VITE_ANALYSIS_WEBHOOK;
    console.log('Using webhook URL:', webhookUrl);
    if (!webhookUrl) {
      throw new Error('Analysis webhook URL not configured');
    }

    console.log('Sending request to webhook...');
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: base64Data,
        timestamp: new Date().toISOString()
      })
    });

    console.log('Received response status:', response.status);
    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Webhook error details:', errorBody);
      throw new Error(`Webhook error: ${response.status}`);
    }

    const result = await response.json();
    console.log('Webhook response:', result);
    
    if (!result || !result.analysis) {
      throw new Error('Invalid analysis response');
    }

    return {
      foodItems: [{
        name: result.analysis.foodName || 'Unknown Food',
        confidence: result.analysis.confidence || 0,
        ingredients: result.analysis.ingredients || [],
        nutritionalInfo: result.analysis.nutrition || {
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0,
          healthScore: 5
        }
      }],
      labels: result.analysis.labels || []
    };

  } catch (error) {
    console.error('Full analysis error:', error);
    throw new Error('Food analysis failed. Please try again.');
  }
}