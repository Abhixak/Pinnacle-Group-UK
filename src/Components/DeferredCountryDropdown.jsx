import React, { Suspense, useCallback, useId, useState } from "react";

const LazyCountryDropdown = React.lazy(() => import("./CountryDropdown"));

const DeferredCountryDropdown = ({
  value,
  onChange,
  inputId,
  ariaLabel,
  placeholder = "Select your country",
}) => {
  const fallbackId = useId();
  const [enabled, setEnabled] = useState(false);

  const enable = useCallback(() => {
    setEnabled(true);
  }, []);

  const resolvedId = inputId || `country-${fallbackId}`;

  return (
    <div onClick={enable} onFocusCapture={enable}>
      {enabled ? (
        <Suspense
          fallback={
            <input
              id={resolvedId}
              aria-label={ariaLabel}
              placeholder={placeholder}
              className="w-full h-10 border border-slate-300 rounded-md !px-3 text-sm text-slate-600 bg-slate-50"
              readOnly
            />
          }
        >
          <LazyCountryDropdown
            value={value}
            onChange={onChange}
            inputId={resolvedId}
            ariaLabel={ariaLabel}
          />
        </Suspense>
      ) : (
        <input
          id={resolvedId}
          aria-label={ariaLabel}
          placeholder={placeholder}
          className="w-full h-10 border border-slate-300 rounded-md !px-3 text-sm text-slate-600 bg-white"
          readOnly
        />
      )}
    </div>
  );
};

export default DeferredCountryDropdown;
