import prisma from "../config/database";

async function getCars() {
  const cars = await prisma.cars.findMany();
  return cars;
}

async function getCar(id: number) {
  const car = await prisma.cars.findUnique({where : {id: id}});
  return car;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const car = await prisma.cars.findUnique({where : {licensePlate: licensePlate}});
  return car;
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  await prisma.cars.create({data: {model: model, licensePlate: licensePlate, year: year, color: color}});
}

async function deleteCar(id: number) {
  await prisma.cars.delete({where: {id: id}});
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;