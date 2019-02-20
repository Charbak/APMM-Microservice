package com.msl.mcs.eddi.geo.feeds.controller;

import java.util.IdentityHashMap;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.msl.mcs.eddi.geo.feeds.service.GeoFeedProcessorService;

@RestController
@Async
@RequestMapping("/")
public class SchedulerController {
	
	private final Map<String, ScheduledFuture<?>> scheduledTasks = new IdentityHashMap<>();
	
	@Value("${listener.geo.interval}")
	private long FIXED_RATE = 5000;

    @Autowired
    TaskScheduler scheduler;
    
    @Autowired
    TaskExecutor executor;

    @Autowired
    GeoFeedProcessorService feedProcessor;

    /**
     * Start the task on schedule
     * @param taskName
     * @return
     */
    @RequestMapping("start-timer/{taskName}")
    String start(@PathVariable String taskName) {
    	scheduledTasks.put(taskName, scheduler.scheduleAtFixedRate(lunchTask(taskName), FIXED_RATE));
        return "Task["+taskName+"] has been triggered to start";
    }//EndMethod

    /**
     * Stop the scheduled task
     * @param taskName
     * @return
     */
    @RequestMapping("stop-timer/{taskName}")
    String stop(@PathVariable String taskName) {
    	if(scheduledTasks.containsKey(taskName)){
    		scheduledTasks.get(taskName).cancel(false);
    		scheduledTasks.remove(taskName);
    	}//EndIf
    	return "Task["+taskName+"] has been triggered to stop";
    }//EndMethod
    
    /**
     * Force scheduled task to stop
     * @param taskName
     * @return
     */
    @RequestMapping("force/{taskName}")
    String force(@PathVariable String taskName) {
    	if(scheduledTasks.containsKey(taskName)){
    		scheduledTasks.get(taskName).cancel(true);
    		scheduledTasks.remove(taskName);
    	}//EndIf
    	return "Task["+taskName+"] has been stopped forcefully";
    }//EndMethod
    
    /**
     * List all tasks
     * @return
     */
    @RequestMapping("tasklist")
    String[] listTaks() {
    	if(scheduledTasks.isEmpty()) return new String[scheduledTasks.size()];
    	return scheduledTasks.keySet().toArray(new String[scheduledTasks.size()]);
    }//EndMethod   
    
    /**
     * invoke a task
     * @return
     */
    @RequestMapping("invoke/{taskName}")
    String invokeTask(@PathVariable String taskName) {
    	executor.execute(lunchTask(taskName));
    	return "Task["+taskName+"] has been invoked";
    }//EndMethod   

    /**
     * Lunch the task by given task name
     * @param taskName
     * @return
     */
    private Runnable lunchTask(String taskName) {
    	//if taskname is feed processor type then run this
        return () -> feedProcessor.handleNotification();
    }//EndMethod
}//EndClass
