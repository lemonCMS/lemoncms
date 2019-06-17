import EventEmitter from 'events';

export class EventService {

  prefix = 'miniverse';

  service = null;

  constructor() {
    this.service = new EventEmitter;
  }

  /**
   *
   * @param type
   * @param value
   */
  emit(type, value) {
    this.service.emit(this.eventType(type), value);
  }

  /**
   *
   * @param type
   */
  on(type, callback) {
    this.service.on(this.eventType(type), callback);
  }

  /**
   *
   * @param type
   * @returns {string}
   */
  eventType(type) {
    return `${this.prefix}::${type}`;
  }
}
