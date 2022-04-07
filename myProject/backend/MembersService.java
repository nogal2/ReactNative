package com.recipe.a.service;

import com.recipe.a.dto.MembersDto;
import com.recipe.a.dto.MyFavoriteDto;
import com.recipe.a.dto.PhotoDto;
import com.recipe.a.dto.RecipeDto;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.bcrypt.BCrypt;

import com.recipe.a.dao.MembersDao;
import com.recipe.a.dto.MembersDto;

@Service
@Transactional
public class MembersService {
	
	static BCrypt bcr;
	
	private MembersDao dao;

	public MembersService(MembersDao dao) {
		this.dao = dao;
	}

	public int countMembers() {
		System.out.println("MembersService");
		return dao.countMembers();
	}
	
	// 아이디 중복
	public boolean idCheck(MembersDto dto) {
		int n = dao.idCheck(dto);
		
		return n>0 ? true:false;
	}
	
	// 회원가입 - 노승현
	public boolean regist(MembersDto dto) {	
		int b = dao.idCheck(dto);
		
		if(b == 1) {
			return true;
		} else {
			int n = dao.regist(dto);
			
			return n>0? true:false;
		}
	}
	
	// 로그인
	public MembersDto login(String memberId, String memberPwd) {
		
		MembersDto salt = dao.getSalt(memberId, memberPwd);
		System.out.println("memberService getSalt: " + salt.getSalt()+ " memberPwd: " + memberPwd);
		
		String encodedPassword = bcr.hashpw(memberPwd, salt.getSalt());
		System.out.println("encodedPassword: " + encodedPassword);
		
		return dao.login(encodedPassword);
	}
	
	//내가 좋아하는 레시피
	public List<MyFavoriteDto> myFavoriteRecipe(String memberId) {
		System.out.println("myFavoriteRecipe service");
		
		List<RecipeDto> recipeSeqListDto = dao.getRecipeSeq(memberId);
		System.out.println("recipeSeqListDto: " + recipeSeqListDto.toString());
		System.out.println("recipeSeqListDto: " + recipeSeqListDto.size());
		List<Integer> recipeSeqList = new ArrayList<Integer>();
		for(int i=0; i < recipeSeqListDto.size(); i++) {
			recipeSeqList.add(recipeSeqListDto.get(i).getRecipeSeq());
		}
		System.out.println("recipeSeqList: " + recipeSeqList.toString());
		
		List<RecipeDto> recipeInfo = new ArrayList<RecipeDto>();
		List<PhotoDto> thumbnailList = new ArrayList<PhotoDto>();
		List<MyFavoriteDto> recipeRatingCountList = new ArrayList<MyFavoriteDto>();
		
		for(int i=0; i<recipeSeqList.size(); i++) {
			recipeInfo.add(dao.getRecipeInfo(recipeSeqList.get(i)));
			thumbnailList.add(dao.getThumbnail(recipeSeqList.get(i)));
			int test = dao.getRatingCount(recipeSeqList.get(i));
			MyFavoriteDto my = new MyFavoriteDto();
			my.setRecipeRatingCountList(test);
			recipeRatingCountList.add(my);
		}
			
		System.out.println("recipeRatingCountList");
		List<String> recipeTitleList = new ArrayList<String>();
		List<Integer> recipeReadcountList = new ArrayList<Integer>();
		List<Float> recipeRatingList = new ArrayList<Float>();
		
		for(RecipeDto recipe : recipeInfo) {
			recipeTitleList.add(recipe.getRecipeTitle());
			recipeReadcountList.add(recipe.getRecipeReadcount());
			recipeRatingList.add(recipe.getRecipeRating());
		}
		
		
		System.out.println("recipeInfo: " + recipeInfo.size());
		System.out.println("thumbnailList: " + thumbnailList.size());
		for(int i=0; i < thumbnailList.size(); i++) {
			System.out.println(thumbnailList.get(i).toString()); 
		}
		System.out.println("recipeRatingCountList: " + recipeRatingCountList.toString());
		
		List<MyFavoriteDto> result = new ArrayList<MyFavoriteDto>();
		for(int i=0; i < recipeSeqList.size(); i++) {
			result.add(new MyFavoriteDto (
					recipeSeqList.get(i),
					recipeInfo.get(i).getRecipeTitle(),
					recipeInfo.get(i).getRecipeReadcount(),
					recipeInfo.get(i).getRecipeRating(),
					thumbnailList.get(i).getPhotoUrl(),
					recipeRatingCountList.get(i).getRecipeRatingCountList(),
					memberId
					));
		}
//		result.put("recipeSeq", recipeSeqList);
//		result.put("recipeTitle", recipeTitleList);
//		result.put("recipeReadCount", recipeReadcountList);
//		result.put("recipeRating", recipeRatingList);
//		result.put("recipeThumbnails", thumbnailList);
//		result.put("recipeRatingCount", recipeRatingCountList);
		
		return result;
		
		
	}
	
	public List<RecipeDto> test1() {
		return dao.test1();
	}

	
}
