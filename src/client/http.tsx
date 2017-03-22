import { KeyValuePair } from 'chen-react';


export class HttpClient {
  protected defaultOptions: KeyValuePair<any>;
  protected defaultHeaders: KeyValuePair<any>;

  constructor() {
    this.defaultOptions = { cache: false };
    this.defaultHeaders = {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json'
    };
  }

  addDefaultOption(key: string, value: any) {
    this.defaultOptions[key] = value;
  }

  removeDefaultOption(key: string) {
    delete this.defaultOptions[key];
  }

  protected applyDefaultOptions(options: KeyValuePair<any>): KeyValuePair<any> {
    if (typeof options == 'undefined') {
        options = {};
    }

    for (let key in this.defaultOptions) {
        options[key] = this.defaultOptions[key];
    }

    return options;
  }

  addDefaultHeader(key: string, value: string | number) {
    this.defaultHeaders[key] = `${value}`;
  }

  removeDefaultHeader(key: string) {
    delete this.defaultHeaders[key];
  }

  protected applyDefaultHeaders(headers: KeyValuePair<any>): KeyValuePair<any> {
    if (typeof headers == 'undefined') {
        headers = {};
    }

    let apiToken = window.localStorage.getItem('API_TOKEN');
    if (apiToken) {
      this.addDefaultHeader('Authorization', `Bearer ${apiToken}`);
    }

    for (let key in this.defaultHeaders) {
        headers[key] = this.defaultHeaders[key];
    }

    return headers;
  }

  protected buildOptions(url, data: KeyValuePair<any> | string): KeyValuePair<any> {
    let options = this.applyDefaultOptions({});
    options['url'] = url;
    options['data'] = data;
    options['headers'] = this.applyDefaultHeaders(options['headers']);
    return options;
  }

  protected ajax(options: KeyValuePair<any>, cb: Function = () => {}): JQueryXHR {
    let xhr = $.ajax(options);
    xhr.done(res => cb(true, res)).fail(xhr => cb(false, xhr.responseJSON));
    return xhr;
  }

  get(url: string, query?: KeyValuePair<any>, cb: Function = () => {}): JQueryXHR {
    return this.ajax(this.buildOptions(url, query), cb);
  }

  post(url: string, body?: string, cb: Function = () => {}, optionsFn?: (options: KeyValuePair<any>) => void): JQueryXHR {
    let requestOptions = this.buildOptions(url, body);
    requestOptions['method'] = 'post';
    requestOptions['dataType'] = 'text json';
    if (optionsFn) optionsFn(requestOptions);
    return this.ajax(requestOptions, cb);
  }

  delete(url: string, body?: string, cb: Function = () => {}): JQueryXHR {
    let requestOptions = this.buildOptions(url, body);
    requestOptions['method'] = 'delete';
    return this.ajax(requestOptions, cb);
  }

  put(url: string, body?: string, cb: Function = () => {}): JQueryXHR {
    let requestOptions = this.buildOptions(url, body);
    requestOptions['method'] = 'put';
    requestOptions['dataType'] = 'text json';
    return this.ajax(requestOptions, cb);
  }
}

export const http = new HttpClient();

export function formatResponse(cb) {
  return (success: boolean, res, status): void => {

    let error = res ? res.error : null;
    if (typeof error == 'undefined') {
        error = null;
    }

    let data = res ? res.data: res;
    if (typeof data == 'undefined') {
        data = null;
    }

    if (cb && typeof cb == 'function') {
      if (success) {
        cb(data, error);
      } else {
        cb(null, error);
      }
    }
  };
}
