import List from '../list.js';
import { complete, removeTask } from '../status.js';

jest.mock('../list.js');
jest.mock('../status.js');

describe('Task manipulation', () => {
  test('Edit task', () => {
    const task = new List('task');
    task.index = 1;
    List.listArray.push(task);
    List.edit(1, 'new task');
    expect(List.listArray[0].description).toBe('new task');
  });

  test('Update completed task checkbox', () => {
    const oldStatus = JSON.parse(localStorage.getItem('list'))[0].complete;
    complete();

    expect(JSON.parse(localStorage.getItem('list'))[0].complete).not.toBe(oldStatus);
  });

  test('Delete all complete task', () => {
    removeTask();
    expect(JSON.parse(localStorage.getItem('list')).length).toBe(1);
  });
});
