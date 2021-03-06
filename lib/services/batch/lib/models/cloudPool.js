/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @summary A Pool in the Azure Batch service.
  *
 */
class CloudPool {
  /**
   * Create a CloudPool.
   * @property {string} [id] A string that uniquely identifies the Pool within
   * the Account. The ID can contain any combination of alphanumeric characters
   * including hyphens and underscores, and cannot contain more than 64
   * characters. The ID is case-preserving and case-insensitive (that is, you
   * may not have two IDs within an Account that differ only by case).
   * @property {string} [displayName] The display name for the Pool. The
   * display name need not be unique and can contain any Unicode characters up
   * to a maximum length of 1024.
   * @property {string} [url] The URL of the Pool.
   * @property {string} [eTag] The ETag of the Pool. This is an opaque string.
   * You can use it to detect whether the Pool has changed between requests. In
   * particular, you can be pass the ETag when updating a Pool to specify that
   * your changes should take effect only if nobody else has modified the Pool
   * in the meantime.
   * @property {date} [lastModified] The last modified time of the Pool. This
   * is the last time at which the Pool level data, such as the
   * targetDedicatedNodes or enableAutoscale settings, changed. It does not
   * factor in node-level changes such as a Compute Node changing state.
   * @property {date} [creationTime] The creation time of the Pool.
   * @property {string} [state] The current state of the Pool. Possible values
   * include: 'active', 'deleting'
   * @property {date} [stateTransitionTime] The time at which the Pool entered
   * its current state.
   * @property {string} [allocationState] Whether the Pool is resizing.
   * Possible values include: 'steady', 'resizing', 'stopping'
   * @property {date} [allocationStateTransitionTime] The time at which the
   * Pool entered its current allocation state.
   * @property {string} [vmSize] The size of virtual machines in the Pool. All
   * virtual machines in a Pool are the same size. For information about
   * available sizes of virtual machines in Pools, see Choose a VM size for
   * Compute Nodes in an Azure Batch Pool
   * (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).
   * @property {object} [cloudServiceConfiguration] The cloud service
   * configuration for the Pool. This property and virtualMachineConfiguration
   * are mutually exclusive and one of the properties must be specified. This
   * property cannot be specified if the Batch Account was created with its
   * poolAllocationMode property set to 'UserSubscription'.
   * @property {string} [cloudServiceConfiguration.osFamily] Possible values
   * are:
   * 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1.
   * 3 - OS Family 3, equivalent to Windows Server 2012.
   * 4 - OS Family 4, equivalent to Windows Server 2012 R2.
   * 5 - OS Family 5, equivalent to Windows Server 2016.
   * 6 - OS Family 6, equivalent to Windows Server 2019. For more information,
   * see Azure Guest OS Releases
   * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
   * @property {string} [cloudServiceConfiguration.osVersion] The default value
   * is * which specifies the latest operating system version for the specified
   * OS family.
   * @property {object} [virtualMachineConfiguration] The virtual machine
   * configuration for the Pool. This property and cloudServiceConfiguration
   * are mutually exclusive and one of the properties must be specified.
   * @property {object} [virtualMachineConfiguration.imageReference]
   * @property {string} [virtualMachineConfiguration.imageReference.publisher]
   * For example, Canonical or MicrosoftWindowsServer.
   * @property {string} [virtualMachineConfiguration.imageReference.offer] For
   * example, UbuntuServer or WindowsServer.
   * @property {string} [virtualMachineConfiguration.imageReference.sku] For
   * example, 18.04-LTS or 2019-Datacenter.
   * @property {string} [virtualMachineConfiguration.imageReference.version] A
   * value of 'latest' can be specified to select the latest version of an
   * Image. If omitted, the default is 'latest'.
   * @property {string}
   * [virtualMachineConfiguration.imageReference.virtualMachineImageId] This
   * property is mutually exclusive with other ImageReference properties. For
   * Virtual Machine Image it must be in the same region and subscription as
   * the Azure Batch account. For SIG image it must have replicas in the same
   * region as the Azure Batch account. For information about the firewall
   * settings for the Batch Compute Node agent to communicate with the Batch
   * service see
   * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration.
   * @property {string} [virtualMachineConfiguration.nodeAgentSKUId] The Batch
   * Compute Node agent is a program that runs on each Compute Node in the
   * Pool, and provides the command-and-control interface between the Compute
   * Node and the Batch service. There are different implementations of the
   * Compute Node agent, known as SKUs, for different operating systems. You
   * must specify a Compute Node agent SKU which matches the selected Image
   * reference. To get the list of supported Compute Node agent SKUs along with
   * their list of verified Image references, see the 'List supported Compute
   * Node agent SKUs' operation.
   * @property {object} [virtualMachineConfiguration.windowsConfiguration] This
   * property must not be specified if the imageReference property specifies a
   * Linux OS Image.
   * @property {boolean}
   * [virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
   * If omitted, the default value is true.
   * @property {array} [virtualMachineConfiguration.dataDisks] This property
   * must be specified if the Compute Nodes in the Pool need to have empty data
   * disks attached to them. This cannot be updated. Each Compute Node gets its
   * own disk (the disk is not a file share). Existing disks cannot be
   * attached, each attached disk is empty. When the Compute Node is removed
   * from the Pool, the disk and all data associated with it is also deleted.
   * The disk is not formatted after being attached, it must be formatted
   * before use - for more information see
   * https://docs.microsoft.com/en-us/azure/virtual-machines/linux/classic/attach-disk#initialize-a-new-data-disk-in-linux
   * and
   * https://docs.microsoft.com/en-us/azure/virtual-machines/windows/attach-disk-ps#add-an-empty-data-disk-to-a-virtual-machine.
   * @property {string} [virtualMachineConfiguration.licenseType] This only
   * applies to Images that contain the Windows operating system, and should
   * only be used when you hold valid on-premises licenses for the Compute
   * Nodes which will be deployed. If omitted, no on-premises licensing
   * discount is applied. Values are:
   *
   * Windows_Server - The on-premises license is for Windows Server.
   * Windows_Client - The on-premises license is for Windows Client.
   * @property {object} [virtualMachineConfiguration.containerConfiguration] If
   * specified, setup is performed on each Compute Node in the Pool to allow
   * Tasks to run in containers. All regular Tasks and Job manager Tasks run on
   * this Pool must specify the containerSettings property, and all other Tasks
   * may specify it.
   * @property {array}
   * [virtualMachineConfiguration.containerConfiguration.containerImageNames]
   * This is the full Image reference, as would be specified to "docker pull".
   * An Image will be sourced from the default Docker registry unless the Image
   * is fully qualified with an alternative registry.
   * @property {array}
   * [virtualMachineConfiguration.containerConfiguration.containerRegistries]
   * If any Images must be downloaded from a private registry which requires
   * credentials, then those credentials must be provided here.
   * @property {moment.duration} [resizeTimeout] The timeout for allocation of
   * Compute Nodes to the Pool. This is the timeout for the most recent resize
   * operation. (The initial sizing when the Pool is created counts as a
   * resize.) The default value is 15 minutes.
   * @property {array} [resizeErrors] A list of errors encountered while
   * performing the last resize on the Pool. This property is set only if one
   * or more errors occurred during the last Pool resize, and only when the
   * Pool allocationState is Steady.
   * @property {number} [currentDedicatedNodes] The number of dedicated Compute
   * Nodes currently in the Pool.
   * @property {number} [currentLowPriorityNodes] The number of low-priority
   * Compute Nodes currently in the Pool. Low-priority Compute Nodes which have
   * been preempted are included in this count.
   * @property {number} [targetDedicatedNodes] The desired number of dedicated
   * Compute Nodes in the Pool.
   * @property {number} [targetLowPriorityNodes] The desired number of
   * low-priority Compute Nodes in the Pool.
   * @property {boolean} [enableAutoScale] Whether the Pool size should
   * automatically adjust over time. If false, at least one of
   * targetDedicateNodes and targetLowPriorityNodes must be specified. If true,
   * the autoScaleFormula property is required and the Pool automatically
   * resizes according to the formula. The default value is false.
   * @property {string} [autoScaleFormula] A formula for the desired number of
   * Compute Nodes in the Pool. This property is set only if the Pool
   * automatically scales, i.e. enableAutoScale is true.
   * @property {moment.duration} [autoScaleEvaluationInterval] The time
   * interval at which to automatically adjust the Pool size according to the
   * autoscale formula. This property is set only if the Pool automatically
   * scales, i.e. enableAutoScale is true.
   * @property {object} [autoScaleRun] The results and errors from the last
   * execution of the autoscale formula. This property is set only if the Pool
   * automatically scales, i.e. enableAutoScale is true.
   * @property {date} [autoScaleRun.timestamp]
   * @property {string} [autoScaleRun.results] Each variable value is returned
   * in the form $variable=value, and variables are separated by semicolons.
   * @property {object} [autoScaleRun.error]
   * @property {string} [autoScaleRun.error.code]
   * @property {string} [autoScaleRun.error.message]
   * @property {array} [autoScaleRun.error.values]
   * @property {boolean} [enableInterNodeCommunication] Whether the Pool
   * permits direct communication between Compute Nodes. This imposes
   * restrictions on which Compute Nodes can be assigned to the Pool.
   * Specifying this value can reduce the chance of the requested number of
   * Compute Nodes to be allocated in the Pool.
   * @property {object} [networkConfiguration] The network configuration for
   * the Pool.
   * @property {string} [networkConfiguration.subnetId] The virtual network
   * must be in the same region and subscription as the Azure Batch Account.
   * The specified subnet should have enough free IP addresses to accommodate
   * the number of Compute Nodes in the Pool. If the subnet doesn't have enough
   * free IP addresses, the Pool will partially allocate Nodes, and a resize
   * error will occur. The 'MicrosoftAzureBatch' service principal must have
   * the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC)
   * role for the specified VNet. The specified subnet must allow communication
   * from the Azure Batch service to be able to schedule Tasks on the Nodes.
   * This can be verified by checking if the specified VNet has any associated
   * Network Security Groups (NSG). If communication to the Nodes in the
   * specified subnet is denied by an NSG, then the Batch service will set the
   * state of the Compute Nodes to unusable. For Pools created with
   * virtualMachineConfiguration only ARM virtual networks
   * ('Microsoft.Network/virtualNetworks') are supported, but for Pools created
   * with cloudServiceConfiguration both ARM and classic virtual networks are
   * supported. If the specified VNet has any associated Network Security
   * Groups (NSG), then a few reserved system ports must be enabled for inbound
   * communication. For Pools created with a virtual machine configuration,
   * enable ports 29876 and 29877, as well as port 22 for Linux and port 3389
   * for Windows. For Pools created with a cloud service configuration, enable
   * ports 10100, 20100, and 30100. Also enable outbound connections to Azure
   * Storage on port 443. For more details see:
   * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
   * @property {string} [networkConfiguration.dynamicVNetAssignmentScope]
   * Possible values include: 'none', 'job'
   * @property {object} [networkConfiguration.endpointConfiguration] Pool
   * endpoint configuration is only supported on Pools with the
   * virtualMachineConfiguration property.
   * @property {array}
   * [networkConfiguration.endpointConfiguration.inboundNATPools] The maximum
   * number of inbound NAT Pools per Batch Pool is 5. If the maximum number of
   * inbound NAT Pools is exceeded the request fails with HTTP status code 400.
   * @property {array} [networkConfiguration.publicIPs] The number of IPs
   * specified here limits the maximum size of the Pool - 50 dedicated nodes or
   * 20 low-priority nodes can be allocated for each public IP. For example, a
   * pool needing 150 dedicated VMs would need at least 3 public IPs specified.
   * Each element of this collection is of the form:
   * /subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Network/publicIPAddresses/{ip}.
   * @property {object} [startTask] A Task specified to run on each Compute
   * Node as it joins the Pool.
   * @property {string} [startTask.commandLine] The command line does not run
   * under a shell, and therefore cannot take advantage of shell features such
   * as environment variable expansion. If you want to take advantage of such
   * features, you should invoke the shell in the command line, for example
   * using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If
   * the command line refers to file paths, it should use a relative path
   * (relative to the Task working directory), or use the Batch provided
   * environment variable
   * (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
   * @property {object} [startTask.containerSettings] When this is specified,
   * all directories recursively below the AZ_BATCH_NODE_ROOT_DIR (the root of
   * Azure Batch directories on the node) are mapped into the container, all
   * Task environment variables are mapped into the container, and the Task
   * command line is executed in the container. Files produced in the container
   * outside of AZ_BATCH_NODE_ROOT_DIR might not be reflected to the host disk,
   * meaning that Batch file APIs will not be able to access those files.
   * @property {string} [startTask.containerSettings.containerRunOptions] These
   * additional options are supplied as arguments to the "docker create"
   * command, in addition to those controlled by the Batch Service.
   * @property {string} [startTask.containerSettings.imageName] This is the
   * full Image reference, as would be specified to "docker pull". If no tag is
   * provided as part of the Image name, the tag ":latest" is used as a
   * default.
   * @property {object} [startTask.containerSettings.registry] This setting can
   * be omitted if was already provided at Pool creation.
   * @property {string} [startTask.containerSettings.registry.registryServer]
   * If omitted, the default is "docker.io".
   * @property {string} [startTask.containerSettings.registry.userName]
   * @property {string} [startTask.containerSettings.registry.password]
   * @property {string} [startTask.containerSettings.workingDirectory] The
   * default is 'taskWorkingDirectory'. Possible values include:
   * 'taskWorkingDirectory', 'containerImageDefault'
   * @property {array} [startTask.resourceFiles] Files listed under this
   * element are located in the Task's working directory.
   * @property {array} [startTask.environmentSettings]
   * @property {object} [startTask.userIdentity] If omitted, the Task runs as a
   * non-administrative user unique to the Task.
   * @property {string} [startTask.userIdentity.userName] The userName and
   * autoUser properties are mutually exclusive; you must specify one but not
   * both.
   * @property {object} [startTask.userIdentity.autoUser] The userName and
   * autoUser properties are mutually exclusive; you must specify one but not
   * both.
   * @property {string} [startTask.userIdentity.autoUser.scope] The default
   * value is pool. If the pool is running Windows a value of Task should be
   * specified if stricter isolation between tasks is required. For example, if
   * the task mutates the registry in a way which could impact other tasks, or
   * if certificates have been specified on the pool which should not be
   * accessible by normal tasks but should be accessible by StartTasks.
   * Possible values include: 'task', 'pool'
   * @property {string} [startTask.userIdentity.autoUser.elevationLevel] The
   * default value is nonAdmin. Possible values include: 'nonAdmin', 'admin'
   * @property {number} [startTask.maxTaskRetryCount] The Batch service retries
   * a Task if its exit code is nonzero. Note that this value specifically
   * controls the number of retries. The Batch service will try the Task once,
   * and may then retry up to this limit. For example, if the maximum retry
   * count is 3, Batch tries the Task up to 4 times (one initial try and 3
   * retries). If the maximum retry count is 0, the Batch service does not
   * retry the Task. If the maximum retry count is -1, the Batch service
   * retries the Task without limit.
   * @property {boolean} [startTask.waitForSuccess] If true and the StartTask
   * fails on a Node, the Batch service retries the StartTask up to its maximum
   * retry count (maxTaskRetryCount). If the Task has still not completed
   * successfully after all retries, then the Batch service marks the Node
   * unusable, and will not schedule Tasks to it. This condition can be
   * detected via the Compute Node state and failure info details. If false,
   * the Batch service will not wait for the StartTask to complete. In this
   * case, other Tasks can start executing on the Compute Node while the
   * StartTask is still running; and even if the StartTask fails, new Tasks
   * will continue to be scheduled on the Compute Node. The default is true.
   * @property {array} [certificateReferences] The list of Certificates to be
   * installed on each Compute Node in the Pool. For Windows Nodes, the Batch
   * service installs the Certificates to the specified Certificate store and
   * location. For Linux Compute Nodes, the Certificates are stored in a
   * directory inside the Task working directory and an environment variable
   * AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this
   * location. For Certificates with visibility of 'remoteUser', a 'certs'
   * directory is created in the user's home directory (e.g.,
   * /home/{user-name}/certs) and Certificates are placed in that directory.
   * @property {array} [applicationPackageReferences] The list of Packages to
   * be installed on each Compute Node in the Pool. Changes to Package
   * references affect all new Nodes joining the Pool, but do not affect
   * Compute Nodes that are already in the Pool until they are rebooted or
   * reimaged. There is a maximum of 10 Package references on any given Pool.
   * @property {array} [applicationLicenses] The list of application licenses
   * the Batch service will make available on each Compute Node in the Pool.
   * The list of application licenses must be a subset of available Batch
   * service application licenses. If a license is requested which is not
   * supported, Pool creation will fail.
   * @property {number} [maxTasksPerNode] The maximum number of Tasks that can
   * run concurrently on a single Compute Node in the Pool. The default value
   * is 1. The maximum value is the smaller of 4 times the number of cores of
   * the vmSize of the Pool or 256.
   * @property {object} [taskSchedulingPolicy] How Tasks are distributed across
   * Compute Nodes in a Pool. If not specified, the default is spread.
   * @property {string} [taskSchedulingPolicy.nodeFillType] If not specified,
   * the default is spread. Possible values include: 'spread', 'pack'
   * @property {array} [userAccounts] The list of user Accounts to be created
   * on each Compute Node in the Pool.
   * @property {array} [metadata] A list of name-value pairs associated with
   * the Pool as metadata.
   * @property {object} [stats] Utilization and resource usage statistics for
   * the entire lifetime of the Pool. This property is populated only if the
   * CloudPool was retrieved with an expand clause including the 'stats'
   * attribute; otherwise it is null. The statistics may not be immediately
   * available. The Batch service performs periodic roll-up of statistics. The
   * typical delay is about 30 minutes.
   * @property {string} [stats.url]
   * @property {date} [stats.startTime]
   * @property {date} [stats.lastUpdateTime]
   * @property {object} [stats.usageStats]
   * @property {date} [stats.usageStats.startTime]
   * @property {date} [stats.usageStats.lastUpdateTime]
   * @property {moment.duration} [stats.usageStats.dedicatedCoreTime]
   * @property {object} [stats.resourceStats]
   * @property {date} [stats.resourceStats.startTime]
   * @property {date} [stats.resourceStats.lastUpdateTime]
   * @property {number} [stats.resourceStats.avgCPUPercentage]
   * @property {number} [stats.resourceStats.avgMemoryGiB]
   * @property {number} [stats.resourceStats.peakMemoryGiB]
   * @property {number} [stats.resourceStats.avgDiskGiB]
   * @property {number} [stats.resourceStats.peakDiskGiB]
   * @property {number} [stats.resourceStats.diskReadIOps]
   * @property {number} [stats.resourceStats.diskWriteIOps]
   * @property {number} [stats.resourceStats.diskReadGiB]
   * @property {number} [stats.resourceStats.diskWriteGiB]
   * @property {number} [stats.resourceStats.networkReadGiB]
   * @property {number} [stats.resourceStats.networkWriteGiB]
   * @property {array} [mountConfiguration] A list of file systems to mount on
   * each node in the pool. This supports Azure Files, NFS, CIFS/SMB, and
   * Blobfuse.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CloudPool
   *
   * @returns {object} metadata of CloudPool
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CloudPool',
      type: {
        name: 'Composite',
        className: 'CloudPool',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          eTag: {
            required: false,
            serializedName: 'eTag',
            type: {
              name: 'String'
            }
          },
          lastModified: {
            required: false,
            serializedName: 'lastModified',
            type: {
              name: 'DateTime'
            }
          },
          creationTime: {
            required: false,
            serializedName: 'creationTime',
            type: {
              name: 'DateTime'
            }
          },
          state: {
            required: false,
            serializedName: 'state',
            type: {
              name: 'Enum',
              allowedValues: [ 'active', 'deleting' ]
            }
          },
          stateTransitionTime: {
            required: false,
            serializedName: 'stateTransitionTime',
            type: {
              name: 'DateTime'
            }
          },
          allocationState: {
            required: false,
            serializedName: 'allocationState',
            type: {
              name: 'Enum',
              allowedValues: [ 'steady', 'resizing', 'stopping' ]
            }
          },
          allocationStateTransitionTime: {
            required: false,
            serializedName: 'allocationStateTransitionTime',
            type: {
              name: 'DateTime'
            }
          },
          vmSize: {
            required: false,
            serializedName: 'vmSize',
            type: {
              name: 'String'
            }
          },
          cloudServiceConfiguration: {
            required: false,
            serializedName: 'cloudServiceConfiguration',
            type: {
              name: 'Composite',
              className: 'CloudServiceConfiguration'
            }
          },
          virtualMachineConfiguration: {
            required: false,
            serializedName: 'virtualMachineConfiguration',
            type: {
              name: 'Composite',
              className: 'VirtualMachineConfiguration'
            }
          },
          resizeTimeout: {
            required: false,
            serializedName: 'resizeTimeout',
            type: {
              name: 'TimeSpan'
            }
          },
          resizeErrors: {
            required: false,
            serializedName: 'resizeErrors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ResizeErrorElementType',
                  type: {
                    name: 'Composite',
                    className: 'ResizeError'
                  }
              }
            }
          },
          currentDedicatedNodes: {
            required: false,
            serializedName: 'currentDedicatedNodes',
            type: {
              name: 'Number'
            }
          },
          currentLowPriorityNodes: {
            required: false,
            serializedName: 'currentLowPriorityNodes',
            type: {
              name: 'Number'
            }
          },
          targetDedicatedNodes: {
            required: false,
            serializedName: 'targetDedicatedNodes',
            type: {
              name: 'Number'
            }
          },
          targetLowPriorityNodes: {
            required: false,
            serializedName: 'targetLowPriorityNodes',
            type: {
              name: 'Number'
            }
          },
          enableAutoScale: {
            required: false,
            serializedName: 'enableAutoScale',
            type: {
              name: 'Boolean'
            }
          },
          autoScaleFormula: {
            required: false,
            serializedName: 'autoScaleFormula',
            type: {
              name: 'String'
            }
          },
          autoScaleEvaluationInterval: {
            required: false,
            serializedName: 'autoScaleEvaluationInterval',
            type: {
              name: 'TimeSpan'
            }
          },
          autoScaleRun: {
            required: false,
            serializedName: 'autoScaleRun',
            type: {
              name: 'Composite',
              className: 'AutoScaleRun'
            }
          },
          enableInterNodeCommunication: {
            required: false,
            serializedName: 'enableInterNodeCommunication',
            type: {
              name: 'Boolean'
            }
          },
          networkConfiguration: {
            required: false,
            serializedName: 'networkConfiguration',
            type: {
              name: 'Composite',
              className: 'NetworkConfiguration'
            }
          },
          startTask: {
            required: false,
            serializedName: 'startTask',
            type: {
              name: 'Composite',
              className: 'StartTask'
            }
          },
          certificateReferences: {
            required: false,
            serializedName: 'certificateReferences',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CertificateReferenceElementType',
                  type: {
                    name: 'Composite',
                    className: 'CertificateReference'
                  }
              }
            }
          },
          applicationPackageReferences: {
            required: false,
            serializedName: 'applicationPackageReferences',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationPackageReferenceElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationPackageReference'
                  }
              }
            }
          },
          applicationLicenses: {
            required: false,
            serializedName: 'applicationLicenses',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          maxTasksPerNode: {
            required: false,
            serializedName: 'maxTasksPerNode',
            type: {
              name: 'Number'
            }
          },
          taskSchedulingPolicy: {
            required: false,
            serializedName: 'taskSchedulingPolicy',
            type: {
              name: 'Composite',
              className: 'TaskSchedulingPolicy'
            }
          },
          userAccounts: {
            required: false,
            serializedName: 'userAccounts',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UserAccountElementType',
                  type: {
                    name: 'Composite',
                    className: 'UserAccount'
                  }
              }
            }
          },
          metadata: {
            required: false,
            serializedName: 'metadata',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MetadataItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'MetadataItem'
                  }
              }
            }
          },
          stats: {
            required: false,
            serializedName: 'stats',
            type: {
              name: 'Composite',
              className: 'PoolStatistics'
            }
          },
          mountConfiguration: {
            required: false,
            serializedName: 'mountConfiguration',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MountConfigurationElementType',
                  type: {
                    name: 'Composite',
                    className: 'MountConfiguration'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CloudPool;
