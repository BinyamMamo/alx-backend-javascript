export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let taskInsideIf = true;
    let task2InsideIf = false;
  }

  return [task, task2];
}
