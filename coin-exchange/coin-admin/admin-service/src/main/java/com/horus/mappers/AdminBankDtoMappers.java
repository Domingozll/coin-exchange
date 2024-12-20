package com.horus.mappers;

import com.horus.domain.AdminBank;
import com.horus.dto.AdminBankDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AdminBankDtoMappers {

    AdminBankDtoMappers INSTANCE = Mappers.getMapper(AdminBankDtoMappers.class);

    /*
     *  Dto -> Entity
     * */
    AdminBank toConvertEntity(AdminBankDto source);

    /*
     *  Entity -> Dto
     * */
    AdminBankDto toConvertDto(AdminBank source);

    /*
     *  List<Dto> -> List<Entity>
     * */
    List<AdminBank> toConvertEntity(List<AdminBankDto> source);

    /*
     *  List<Entity> -> List<Dto>
     * */
    List<AdminBankDto> toConvertDto(List<AdminBank> source);
}
