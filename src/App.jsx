import { createSignal, Show, For } from 'solid-js';
import { createEvent } from './supabaseClient';

function App() {
  const [origin, setOrigin] = createSignal('');
  const [destination, setDestination] = createSignal('');
  const [travelMode, setTravelMode] = createSignal('driving');
  const [directions, setDirections] = createSignal(null);
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal('');

  const handleGetDirections = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setDirections(null);

    try {
      const instructions = `Call the Google Maps Directions API with the following parameters:
      - origin: "${origin()}"
      - destination: "${destination()}"
      - mode: "${travelMode()}"
      Return the full JSON response.`;

      const result = await createEvent('call_api', {
        api_id: 'bc229587-f358-4dec-9718-0e11a6871170',
        instructions: instructions
      });

      if (result && result.routes && result.routes.length > 0) {
        setDirections(result.routes[0]);
      } else {
        setError('No directions found. Please check your input.');
      }
    } catch (err) {
      console.error('Error fetching directions:', err);
      setError('An error occurred while fetching directions.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-purple-600 mb-8 text-center">Directions App</h1>
        <form onSubmit={handleGetDirections} class="bg-white p-6 rounded-lg shadow-md mb-8 space-y-4">
          <div>
            <label class="block text-gray-700 font-semibold mb-2" for="origin">
              Origin
            </label>
            <input
              type="text"
              id="origin"
              value={origin()}
              onInput={(e) => setOrigin(e.target.value)}
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
              placeholder="Enter starting location"
              required
            />
          </div>
          <div>
            <label class="block text-gray-700 font-semibold mb-2" for="destination">
              Destination
            </label>
            <input
              type="text"
              id="destination"
              value={destination()}
              onInput={(e) => setDestination(e.target.value)}
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
              placeholder="Enter destination"
              required
            />
          </div>
          <div>
            <label class="block text-gray-700 font-semibold mb-2" for="mode">
              Travel Mode
            </label>
            <select
              id="mode"
              value={travelMode()}
              onChange={(e) => setTravelMode(e.target.value)}
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
            >
              <option value="driving">Driving</option>
              <option value="walking">Walking</option>
              <option value="bicycling">Bicycling</option>
              <option value="transit">Transit</option>
            </select>
          </div>
          <button
            type="submit"
            class={`w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${
              loading() ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading()}
          >
            {loading() ? 'Fetching Directions...' : 'Get Directions'}
          </button>
          <Show when={error()}>
            <p class="text-red-500 mt-2">{error()}</p>
          </Show>
        </form>

        <Show when={directions()}>
          <div class="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 class="text-2xl font-bold text-purple-600 mb-4">Route Summary</h2>
            <p class="text-gray-700">
              <strong>Distance:</strong> {directions().legs[0].distance.text}
            </p>
            <p class="text-gray-700">
              <strong>Duration:</strong> {directions().legs[0].duration.text}
            </p>
            <h3 class="text-xl font-semibold text-purple-600 mt-6">Step-by-Step Directions</h3>
            <ol class="list-decimal list-inside space-y-2">
              <For each={directions().legs[0].steps}>
                {(step) => (
                  <li class="text-gray-700" innerHTML={step.html_instructions}></li>
                )}
              </For>
            </ol>
          </div>
        </Show>
      </div>
    </div>
  );
}

export default App;