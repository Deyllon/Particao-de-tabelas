import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClienteEntity } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(private readonly prisma : PrismaService){}
  async create(createClienteDto: CreateClienteDto) : Promise<ClienteEntity | object> {
    try {
      return this.prisma.cliente.create({data:createClienteDto})
    } catch (error) {
      return{ message: error.message, status : error.status }
    }
   
  }

  async findAll(ano: number) : Promise<ClienteEntity | object> {
    try {
      return this.prisma.cliente.findMany({
        where: {
          ano
        }
      })
    } catch (error) {
      return{ message: error.message, status : error.status }
    }
    
  }

  async findOne(id: number, ano : number) : Promise<ClienteEntity | object> {
    try {
      return this.prisma.cliente.findUnique({
        where:{
          id_ano:{
            id,
            ano
          }
        }
      })
    } catch (error) {
      return{ message: error.message, status : error.status }
    }
  }

  async update(id: number, ano: number, updateClienteDto: UpdateClienteDto) : Promise<ClienteEntity | object> {
    try {
      return this.prisma.cliente.update({
        where:{
        id_ano:{
          id,
          ano
      }
        },
        data:updateClienteDto
      })
    }

    catch (error) {
      return{ message: error.message, status : error.status }
    }
  }

  async remove(id: number, ano: number) : Promise<ClienteEntity | object> {
    try {
      return this.prisma.cliente.delete({
        where:{
          id_ano:{
            id,
            ano
          }
        }
      })
    } catch (error) {
      return{ message: error.message, status : error.status }
    }
  }
}
