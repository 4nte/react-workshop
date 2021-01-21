export interface Service {
  id: number,
  name: string,
  operational: boolean,
}

const serviceStatuses: Service[] = [
  {
    id: 1,
    name: 'Website',
    operational: true
  },
  {
    id: 2,
    name: 'Chat service',
    operational: false
  },
  {
    id: 3,
    name: 'Auth service',
    operational: true
  },
  {
    id: 4,
    name: 'Web store',
    operational: false
  }
];

export default serviceStatuses;
