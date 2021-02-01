export interface Service {
  id: number,
  name: string,
  operational: boolean,
  uptime: number,
}

const serviceStatuses: Service[] = [
  {
    id: 1,
    name: 'Website',
    operational: true,
    uptime: 99.8,
  },
  {
    id: 2,
    name: 'Chat service',
    operational: false,
    uptime: 99.8,
  },
  {
    id: 3,
    name: 'Auth service',
    operational: true,
    uptime: 99.7,

  },
  {
    id: 4,
    name: 'Web store',
    operational: false,
    uptime: 99.6,
  },
  {
    id: 4,
    name: 'CDN service',
    operational: true,
    uptime: 99.4,
  }
  ,
  {
    id: 4,
    name: 'DNS service',
    operational: true,
    uptime: 99.3,
  },
  {
    id: 4,
    name: 'Email service',
    operational: true,
    uptime: 98.6,
  }
];

export default serviceStatuses;
