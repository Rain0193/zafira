package com.qaprosoft.zafira.batchservices.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.qaprosoft.zafira.batchservices.service.ISchedulerService;
import com.qaprosoft.zafira.batchservices.tasks.AbortFrozenTestRunsTask;
import com.qaprosoft.zafira.services.exceptions.ServiceException;

public class SchedulerService implements ISchedulerService
{
	private static final Logger logger = LoggerFactory.getLogger(SchedulerService.class);
	
	@Autowired
	private AbortFrozenTestRunsTask abortFrozenTestRunsTask;
	

	@Override
	public void executeAbortFrozenTestRunsTask() 
	{
		try
		{
			abortFrozenTestRunsTask.runTask();
			logger.info("");		
		} catch (ServiceException e)
		{
			logger.error("" + e);
		}
	}
}