package com.devsuperior.dscatalog.services;

import java.util.List;
import java.util.Optional;

import com.devsuperior.dscatalog.dto.CategoryDTO;

public interface CategoryService {
    
    List<CategoryDTO> findAll();
    Optional<CategoryDTO> findById(Long id);
}
