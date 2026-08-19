const About = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-navy-900 mb-6">About PillChecker</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-navy-800 mb-2">What is PillChecker?</h2>
          <p>PillChecker is a consumer-facing medicine information web application designed to help people quickly access clear, structured data about unfamiliar medicines and available interaction-related warnings.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-800 mb-2">Data Source</h2>
          <p>All medication information displayed on this application is dynamically sourced from the <strong>OpenFDA API</strong>. This API provides public access to FDA-approved drug labels and warnings.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-800 mb-2">Limitations</h2>
          <p>This tool relies solely on the data formatted and returned by the OpenFDA endpoint. If a specific warning or interaction is not listed on a drug's official label data in the API, it will not appear here.</p>
        </section>
        
        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-md text-amber-900 text-sm">
          <strong>Medical Disclaimer:</strong> PillChecker provides general medication information and does not replace advice from a qualified healthcare professional. Do not use this application to diagnose conditions or verify the absolute safety of drug combinations.
        </div>
      </div>
    </div>
  );
};

export default About;