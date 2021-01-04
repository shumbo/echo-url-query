import { h, FunctionComponent } from "preact";
import { useState, useEffect, useMemo } from "preact/hooks";

export const Table: FunctionComponent = () => {
  const [query, setQuery] = useState<URLSearchParams | null>(null);
  useEffect(() => {
    setQuery(new URLSearchParams(location.search));
  }, []);
  if (!query || [...query].length === 0) {
    return <blockquote>No URL Query Parameters are set.</blockquote>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {useMemo(
          () =>
            [...query].map(([key, value], i) => (
              <tr key={i}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            )),
          [query]
        )}
      </tbody>
    </table>
  );
};
