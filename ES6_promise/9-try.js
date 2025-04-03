export default function guardrail(mathFunction) {
  const queue = [];
  const result = {
    value: null,
    status: 'pending',
  };
  try {
    result.value = mathFunction();
    result.status = 'Guardrail was processed';
  } catch (error) {
    result.value = String(error);
    result.status = 'Guardrail was processed';
  }
  queue.push(result);
  return queue;
}
