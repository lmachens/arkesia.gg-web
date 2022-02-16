import { NavLink } from "remix";
import { continents } from "~/lib/db";

export default function MapSelect() {
  return (
    <section>
      <h3>Maps</h3>
      <ul>
        {continents.map((continent) => (
          <li key={continent.name}>
            {continent.name}
            <ul>
              {continent.areas.map((area) => (
                <li key={area.name}>
                  <NavLink
                    to={`/maps/${encodeURIComponent(
                      continent.name
                    )}/${encodeURIComponent(area.name)}`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {area.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
