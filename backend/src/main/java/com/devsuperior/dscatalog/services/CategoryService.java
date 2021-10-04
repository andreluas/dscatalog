package com.devsuperior.dscatalog.services;

import java.util.List;

import com.devsuperior.dscatalog.dto.CategoryDTO;

public interface CategoryService {
    
    List<CategoryDTO> findAll();
}
