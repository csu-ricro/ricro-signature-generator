export const updateName = (name) => {
  console.log("action", name)
  return {
    type: 'UPDATE_NAME',
    name,
  };
};

export const updateTitle = (title) => {
  return {
    type: 'UPDATE_TITLE',
    title,
  };
};

export const updateUnitId = (unitId) => {
  return {
    type: 'UPDATE_UNIT_ID',
    unitId,
  };
};

export const updatePosition = (position) => {
  return {
    type: 'UPDATE_POSITION',
    position,
  };
};

export const updatePhone = (phone) => {
  return {
    type: 'UPDATE_PHONE',
    phone,
  };
};
