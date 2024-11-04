interface State {
  email: string;
   name: string;
   username: string;
   message: string;
   phone: string;
   submit: boolean;
   showMessage: boolean;
   error: boolean;
   error2: boolean;
}
interface Action {
  type: string;
  payload: any;
}

export function contactUsPage(state : State, action : Action) :State {
  if (action.type === 'email') {
    return {
      ...state,
      email: action.payload,
    };
  }

  if (action.type === 'name') {
    return {
      ...state,
      name: action.payload,
    };
  }

  if (action.type === 'username') {
    return {
      ...state,
      username: action.payload,
    };
  }

  if (action.type === 'message') {
    return {
      ...state,
      message: action.payload,
    };
  }

  if (action.type === 'phone') {
    return {
      ...state,
      phone: action.payload,
    };
  }

  if (action.type === 'submit') {
    return {
      ...state,
      submit: action.payload,
    };
  }

  if (action.type === 'showMessage') {
    return {
      ...state,
      showMessage: action.payload,
    };
  }

  if (action.type === 'error') {
    return {
      ...state,
      error: action.payload,
    };
  }
  if (action.type === 'error2') {
    return {
      ...state,
      error2: action.payload,
    };
  }
  return state;
}
