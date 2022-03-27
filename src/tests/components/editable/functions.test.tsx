import { handleBlur, handleSubmit, closeForm, openEdit } from '../../../users/components/editable/functions';
import { user } from '../../data/user.data';

describe('handleBlur', () => {
  const setData = jest.fn(data => {});
  const setEdit = jest.fn(data => {});
  it('returns a function calling setData and setEdit in blur', () => {
    const h = handleBlur(setData, setEdit, 'data');
    h({
      currentTarget: {
        contains: () => false
      },
      relatedTarget: {
        id: "id"
      }
    });
    expect(setData).toHaveBeenLastCalledWith('data');
    expect(setEdit).toHaveBeenLastCalledWith(false);
  });
  it('returns a function calling setData and setEdit in blur', () => {
    const h = handleBlur(setData, setEdit, 'data');
    h({
      currentTarget: {
        contains: () => true
      },
      relatedTarget: {
        id: "id"
      }
    });
    expect(setData).not.toHaveBeenCalled();
    expect(setEdit).not.toHaveBeenCalled();
  });
});

describe('handleSubmit', () => {
  const setEdit = jest.fn(data => {});
  const dispatch = jest.fn(() => {});
  const updateObject = () => {
    return 'updatedUser';
  };
  const clone = jest.fn(() => {});
  const update = jest.fn(() => {
    return 'updated';
  });
  const preventDefault = jest.fn(() => {});
  it('returns a function calling setData and setEdit in blur', () => {
    const h = handleSubmit(setEdit, 'data', user, 'name.last', dispatch, updateObject, clone, update);
    h({ preventDefault: preventDefault });
    expect(setEdit).toHaveBeenLastCalledWith(false);
    expect(preventDefault).toHaveBeenCalled();
    expect(update).toHaveBeenLastCalledWith('updatedUser');
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('closeForm', () => {
  const setData = jest.fn(data => {});
  const setEdit = jest.fn(data => {});
  const preventDefault = jest.fn(() => {});
  it('returns a function calling setData and setEdit in blur', () => {
    const h = closeForm(setData, setEdit, 'data');
    h({ preventDefault: preventDefault });
    expect(setEdit).toHaveBeenLastCalledWith(false);
    expect(setData).toHaveBeenLastCalledWith('data');
    expect(preventDefault).toHaveBeenCalled();
  });
});

describe('openEdit', () => {
  const setEdit = jest.fn(data => {});
  const preventDefault = jest.fn(() => {});
  it('returns a function calling setData and setEdit in blur', () => {
    const h = openEdit(setEdit);
    h();
    expect(setEdit).toHaveBeenLastCalledWith(true);
  });
});
