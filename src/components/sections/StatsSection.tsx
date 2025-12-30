import React from 'react';

const StatsSection = () => {
  return (
    <section id="stats-section" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
            Nos chiffres clés
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Des résultats concrets pour des campagnes SMS performantes.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 text-center">
            <div className="text-5xl font-bold text-primary">98%</div>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-300">Taux de réception des SMS</p>
          </div>
          <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 text-center">
            <div className="text-5xl font-bold text-secondary">4x</div>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-300">Plus de réactivité qu'un email</p>
          </div>
          <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 text-center">
            <div className="text-5xl font-bold text-green-500">35%</div>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-300">Augmentation des conversions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
