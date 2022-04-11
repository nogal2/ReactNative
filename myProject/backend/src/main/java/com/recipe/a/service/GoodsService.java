package com.recipe.a.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.recipe.a.dao.GoodsDao;
import com.recipe.a.dao.MembersDao;
import com.recipe.a.dao.PhotoDao;
import com.recipe.a.dao.RatingDao;

@Service
@Transactional
public class GoodsService {

	@Autowired
	GoodsDao goodsDao;
	
	@Autowired
	RatingDao ratingDao;
	
	@Autowired
	PhotoDao photoDao;
	
	public int countGoods() {
		System.out.println("GoodsService");
		return goodsDao.countGoods();
	}
}
