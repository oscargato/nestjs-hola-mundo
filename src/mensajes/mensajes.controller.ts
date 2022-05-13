import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Controller('mensajes')
export class MensajesController {
    @Post()
    create(@Body() createMensajeDto: CreateMensajeDto){
        return 'Mensaje Creado';
    }

    @Get()
    getAll(){
        return 'Lista de Mensajes';
    }

    @Put(':id')
    update(@Body() updateMensajeDto:CreateMensajeDto){
        return 'Mensaje Actualizado';
    }

    @Delete(':id')
    delete(){
        return 'Mensaje Eliminado';
    }    
}
