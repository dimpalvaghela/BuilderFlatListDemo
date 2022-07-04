/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

export const postRequest = async (apiUrl: string, body: any) => {
  try {
    console.log('postRequest', apiUrl, body);
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const result = await response.text();
    const responseJson = JSON.parse(result);
    console.log('postRequest', responseJson);
    return responseJson;
  } catch (error) {
    throw error;
  }
};
export const postFormRequest = async (apiUrl: string, body: any) => {
  try {
    console.log('postFormRequest10', apiUrl, body);
    console.log('postFormRequest50', createFormData(body));

    let headers = {};
    if (body.apiToken) {
      headers = {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${body.apiToken}`,
        // token: `Bearer ${body.apiToken}`,
      };
    } else {
      headers = {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      };
    }
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: createFormData(body),
      mode: 'no-cors',
    }).catch((error) => {
      throw error;
    });

    console.log('postFormRequest1', response);
    console.log('postFormRequest2', response.text());
    console.log('postFormRequest3', response.json());

    const result = await response.text();
    console.log('postFormRequest4', result);

    // const result = await response.json();
    // console.log('postFormRequest result1', result1);
    // console.log('postFormRequest', result);

    

    let responseJson = JSON.parse(result);
    return responseJson;
  } catch (error) {
    throw error;
  }
};

export const getRequest = async (apiUrl: string) => {
  try {
    console.log('getRequest', apiUrl);
    const response = await fetch(apiUrl, {
      credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const result = await response.text();
    const responseJson = JSON.parse(result);
    console.log('getRequest', responseJson);
    return responseJson;
  } catch (error) {
    throw error;
  }
};

const createFormData = (body: any) => {
  const data = new FormData();

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};
