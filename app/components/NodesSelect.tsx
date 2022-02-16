import { nodeCategories } from "~/lib/db";

type NodesSelectProps = {
  value: string[];
  onChange: (value: string[]) => void;
};
export default function NodesSelect({ value, onChange }: NodesSelectProps) {
  return (
    <section>
      <h3>Nodes</h3>
      {nodeCategories.map((nodeCategory) => (
        <section key={nodeCategory.name}>
          <h4>{nodeCategory.name}</h4>
          {nodeCategory.types.map((nodeTypes) => (
            <label key={nodeTypes.name}>
              {nodeTypes.name}{" "}
              <input
                type="checkbox"
                checked={value.includes(nodeTypes.name)}
                onChange={(event) => {
                  let newValue = [...value];
                  if (event.target.checked) {
                    newValue.push(nodeTypes.name);
                  } else {
                    const index = newValue.indexOf(nodeTypes.name);
                    newValue.splice(index, 1);
                  }
                  onChange(newValue);
                }}
              />
            </label>
          ))}
        </section>
      ))}
    </section>
  );
}
