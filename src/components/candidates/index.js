import React from 'react';
import { useFederatedComponent } from 'ab-federation-helpers';

const Candidates = () => {

  const system = {
    module: './candidates',
    scope: 'candidates',
    url: `${process.env.BLOX_ENV_URL_hr1_candidates}/remoteEntry.js`,
  };

  const { Component: FederatedComponent, errorLoading } = useFederatedComponent(
    system?.url,
    system?.scope,
    system?.module,
    React
  );
  return (
    <React.Suspense fallback={''}>
      {errorLoading
        ? `Error loading module "${module}"`
        : FederatedComponent && <FederatedComponent />}
    </React.Suspense>
  );
};

export default Candidates;
