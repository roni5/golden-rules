// local dependencies
import Rule from "../Rule/Rule";

/**
 * Display list of rules.
 */
function RuleList({ rules, setRules }) {
  const deleteRule = (index) => {
    const newRules = [...rules];
    newRules.splice(index, 1);
    setRules(newRules);
  };

  // useEffect(() => {
  //   alert('Rules list updated');
  // }, [rules]);

  return (
    rules &&
    rules.map((rule, index) => (
      <Rule key={rule.id} rule={rule} index={index} onDelete={deleteRule} />
    ))
  );
}

export default RuleList;
