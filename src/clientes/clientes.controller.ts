import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get(':ano')
  findAll(@Param('ano') ano : string) {
    return this.clientesService.findAll(+ano);
  }

  @Get(':id/:ano')
  findOne(@Param('id') id: string, @Param('ano') ano: string){
    return this.clientesService.findOne(+id, +ano);
  }

  @Patch(':id/:ano')
  update(@Param('id') id: string, @Param('ano') ano: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(+id, +ano, updateClienteDto);
  }

  @Delete(':id/:ano')
  remove(@Param('id') id: string, @Param('ano') ano: string) {
    return this.clientesService.remove(+id, +ano);
  }
}
