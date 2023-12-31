import { jest } from '@jest/globals';
import List from '../list.js';

jest.mock('../list.js');

describe('List Functions', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input type="text" id="newtask">
      <ul class="list-container"></ul>
    `;
    const task = document.querySelector('#newtask');
    task.value = 'new task';
  });

  afterEach(() => {
    List.listArray = [];
  });

  test('should add a new list to List.listArray', () => {
    // Arrange

    // Act
    List.add();

    // Assert
    expect(List.listArray).toEqual([
      {
        description: 'new task',
        complete: false,
        index: 1,
      },
    ]);
  });

  test('should remove the list from List.listArray', () => {
    // Arrange
    List.add();

    // Act
    List.remove(1);

    // Assert
    expect(List.listArray).toEqual([]);
  });
});
