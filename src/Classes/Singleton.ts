export class Service {

    static instance: Service | null = null;

    private constructor(private name: string) {}

    getName() {
        return this.name;
    }

    static create(name: string) {
        if (Service.instance === null) {
            console.log('This method will be called once');
            Service.instance = new Service(name);
        }

        return Service.instance;
    }
}

const service = Service.create('Service');

console.log(service.getName());

const serviceTwo = Service.create('Service 2');

console.log(serviceTwo.getName());

// Will only print Service as name as is the first instance created