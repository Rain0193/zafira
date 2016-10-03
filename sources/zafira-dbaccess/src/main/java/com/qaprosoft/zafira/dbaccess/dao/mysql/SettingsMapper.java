package com.qaprosoft.zafira.dbaccess.dao.mysql;

import java.util.List;

import com.qaprosoft.zafira.dbaccess.model.Setting;

public interface SettingsMapper
{
	void createSetting(Setting setting);

	Setting getSettingById(long id);

	Setting getSettingByName(String name);
	
	List<Setting> getAllSettings();

	void updateSetting(Setting setting);

	void deleteSetting(Setting setting);

	void deleteSettingById(long id);
}