export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-eldoria-800">🎲 Bienvenue dans Eldoria</h1>
      <p className="mt-4 text-lg text-gray-300">Préparez-vous pour une aventure épique !</p>
      <div className="mt-8 space-y-4">
        <button className="px-6 py-3 bg-eldoria-600 text-white rounded-lg hover:bg-eldoria-700 transition">
          Créer un personnage
        </button>
        <button className="px-6 py-3 bg-eldoria-500 text-white rounded-lg hover:bg-eldoria-600 transition ml-4">
          Rejoindre une campagne
        </button>
      </div>
    </div>
  )
}
