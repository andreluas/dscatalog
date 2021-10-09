package com.devsuperior.dscatalog.services;

import java.util.List;

import com.devsuperior.dscatalog.dto.CategoryDTO;

public interface CategoryService {
    
    List<CategoryDTO> findAll();
    CategoryDTO findById(Long id);
    CategoryDTO insert(CategoryDTO dto);
    CategoryDTO update(Long id, CategoryDTO dto);
}
