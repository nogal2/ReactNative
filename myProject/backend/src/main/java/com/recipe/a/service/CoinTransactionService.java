package com.recipe.a.service;

import com.recipe.a.dao.CoinTransactionDao;
import com.recipe.a.dto.ChargeCoinDto;
import com.recipe.a.dto.CoinTransactionDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CoinTransactionService {

    private final CoinTransactionDao coinTransactionDao;

    public CoinTransactionService(CoinTransactionDao coinTransactionDao) {
        this.coinTransactionDao = coinTransactionDao;
    }

    // test mode
    public CoinTransactionDto coinTransactionTester() {
        return coinTransactionDao.coinTransactionTester();
    }

    // 사용한 모든 코인 데이터 가져오기
    public List<CoinTransactionDto> getCoinData(String memberId) {
        return coinTransactionDao.getCoinData(memberId);
    }

    // 코인 충전
    public boolean chargeCoin(CoinTransactionDto coinTransactionDto) {
        coinTransactionDao.chargeCoin(coinTransactionDto);
        ChargeCoinDto dto = new ChargeCoinDto(coinTransactionDto.getCoinCount(), coinTransactionDto.getMemberId());
        return coinTransactionDao.chargeCoinUpdate(dto);
    }

    // 코인 사용
    public boolean useCoin(CoinTransactionDto coinTransactionDto) {
        coinTransactionDao.useCoin(coinTransactionDto);
        ChargeCoinDto dto = new ChargeCoinDto(coinTransactionDto.getCoinCount(), coinTransactionDto.getMemberId());
        return coinTransactionDao.useCoinUpdate(dto);
    }

	public int checkPurchaseRecipe(CoinTransactionDto coinTransactionDto) {
		return coinTransactionDao.checkPurchaseRecipe(coinTransactionDto);
		
	}
}
