(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-coroutines-core-js'.");
    }
    root['kotlinx-coroutines-core-js'] = factory(typeof this['kotlinx-coroutines-core-js'] === 'undefined' ? {} : this['kotlinx-coroutines-core-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Continuation = Kotlin.kotlin.coroutines.experimental.Continuation;
  var startCoroutine = Kotlin.kotlin.coroutines.experimental.startCoroutine_xtwlez$;
  var startCoroutine_0 = Kotlin.kotlin.coroutines.experimental.startCoroutine_uao1qo$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Throwable = Error;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var createCoroutineUnchecked = Kotlin.kotlin.coroutines.experimental.intrinsics.createCoroutineUnchecked_xtwlez$;
  var createCoroutineUnchecked_0 = Kotlin.kotlin.coroutines.experimental.intrinsics.createCoroutineUnchecked_uao1qo$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var equals = Kotlin.equals;
  var toString = Kotlin.toString;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var CoroutineContext$Element = Kotlin.kotlin.coroutines.experimental.CoroutineContext.Element;
  var ContinuationInterceptor = Kotlin.kotlin.coroutines.experimental.ContinuationInterceptor;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var AbstractCoroutineContextElement = Kotlin.kotlin.coroutines.experimental.AbstractCoroutineContextElement;
  var CoroutineContext$Key = Kotlin.kotlin.coroutines.experimental.CoroutineContext.Key;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var ensureNotNull = Kotlin.ensureNotNull;
  var hashCode = Kotlin.hashCode;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var buildSequence = Kotlin.kotlin.coroutines.experimental.buildSequence_of7nec$;
  var UnsupportedOperationException_init_0 = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var emptySequence = Kotlin.kotlin.sequences.emptySequence_287e2$;
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  Cancelled.prototype = Object.create(CompletedExceptionally.prototype);
  Cancelled.prototype.constructor = Cancelled;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  AbstractContinuation.prototype = Object.create(JobSupport.prototype);
  AbstractContinuation.prototype.constructor = AbstractContinuation;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  RunCompletion.prototype = Object.create(AbstractContinuation.prototype);
  RunCompletion.prototype.constructor = RunCompletion;
  CancellableContinuationImpl.prototype = Object.create(AbstractContinuation.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  CompletableDeferredImpl.prototype = Object.create(JobSupport.prototype);
  CompletableDeferredImpl.prototype.constructor = CompletableDeferredImpl;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  DeferredCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  DeferredCoroutine.prototype.constructor = DeferredCoroutine;
  LazyDeferredCoroutine.prototype = Object.create(DeferredCoroutine.prototype);
  LazyDeferredCoroutine.prototype.constructor = LazyDeferredCoroutine;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CancellationException.prototype = Object.create(IllegalStateException.prototype);
  CancellationException.prototype.constructor = CancellationException;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  DispatchException.prototype = Object.create(RuntimeException.prototype);
  DispatchException.prototype.constructor = DispatchException;
  NodeDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  MessageQueue.prototype = Object.create(Queue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  WindowDispatcher$queue$ObjectLiteral.prototype = Object.create(MessageQueue.prototype);
  WindowDispatcher$queue$ObjectLiteral.prototype.constructor = WindowDispatcher$queue$ObjectLiteral;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  JobSupport$NodeList.prototype = Object.create(LinkedListHead.prototype);
  JobSupport$NodeList.prototype.constructor = JobSupport$NodeList;
  JobImpl.prototype = Object.create(JobSupport.prototype);
  JobImpl.prototype.constructor = JobImpl;
  JobNode.prototype = Object.create(LinkedListNode.prototype);
  JobNode.prototype.constructor = JobNode;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  JobCancellationNode.prototype = Object.create(JobNode.prototype);
  JobCancellationNode.prototype.constructor = JobCancellationNode;
  InvokeOnCancellation.prototype = Object.create(JobCancellationNode.prototype);
  InvokeOnCancellation.prototype.constructor = InvokeOnCancellation;
  Child.prototype = Object.create(JobCancellationNode.prototype);
  Child.prototype.constructor = Child;
  NonCancellable.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  NonCancellable.prototype.constructor = NonCancellable;
  TimeoutCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  TimeoutCoroutine.prototype.constructor = TimeoutCoroutine;
  TimeoutOrNullCoroutine.prototype = Object.create(TimeoutCoroutine.prototype);
  TimeoutOrNullCoroutine.prototype.constructor = TimeoutOrNullCoroutine;
  function AbstractCoroutine(parentContext, active) {
    if (active === void 0)
      active = true;
    JobSupport.call(this, active);
    this.parentContext_ly5fyv$_0 = parentContext;
    this.context_4jptjh$_0 = this.parentContext_ly5fyv$_0.plus_dvqyjb$(this);
  }
  Object.defineProperty(AbstractCoroutine.prototype, 'context', {
    get: function () {
      return this.context_4jptjh$_0;
    }
  });
  Object.defineProperty(AbstractCoroutine.prototype, 'coroutineContext', {
    get: function () {
      return this.context;
    }
  });
  AbstractCoroutine.prototype.initParentJob_8be2vx$ = function () {
    this.initParentJobInternal_x4lgmv$(this.parentContext_ly5fyv$_0.get_8oh8b3$(Job$Key_getInstance()));
  };
  AbstractCoroutine.prototype.onStart = function () {
  };
  AbstractCoroutine.prototype.onStartInternal = function () {
    this.onStart();
  };
  AbstractCoroutine.prototype.onCancellation_dbl4no$ = function (cause) {
  };
  AbstractCoroutine.prototype.onCancellationInternal_kybjp5$ = function (exceptionally) {
    this.onCancellation_dbl4no$(exceptionally != null ? exceptionally.cause : null);
  };
  AbstractCoroutine.prototype.onCompleted_11rb$ = function (value) {
  };
  AbstractCoroutine.prototype.onCompletedExceptionally_tcv7n7$ = function (exception) {
  };
  AbstractCoroutine.prototype.onCompletionInternal_cypnoy$ = function (state, mode) {
    var tmp$;
    if (Kotlin.isType(state, CompletedExceptionally))
      this.onCompletedExceptionally_tcv7n7$(state.exception);
    else {
      this.onCompleted_11rb$((tmp$ = state) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
    }
  };
  Object.defineProperty(AbstractCoroutine.prototype, 'defaultResumeMode', {
    get: function () {
      return MODE_ATOMIC_DEFAULT;
    }
  });
  AbstractCoroutine.prototype.resume_11rb$ = function (value) {
    this.makeCompletingOnce_42w2xh$(value, this.defaultResumeMode);
  };
  AbstractCoroutine.prototype.resumeWithException_tcv7n7$ = function (exception) {
    this.makeCompletingOnce_42w2xh$(CompletedExceptionally_init(exception), this.defaultResumeMode);
  };
  AbstractCoroutine.prototype.handleException_tcv7n7$ = function (exception) {
    handleCoroutineException(this.parentContext_ly5fyv$_0, exception);
  };
  AbstractCoroutine.prototype.nameString = function () {
    var tmp$;
    tmp$ = get_coroutineName(this.context);
    if (tmp$ == null) {
      return JobSupport.prototype.nameString.call(this);
    }
    var coroutineName = tmp$;
    return '"' + coroutineName + '"' + ':' + JobSupport.prototype.nameString.call(this);
  };
  AbstractCoroutine.prototype.start_97aoev$ = function (start, block) {
    this.initParentJob_8be2vx$();
    start.invoke_c3kej2$(block, this);
  };
  AbstractCoroutine.prototype.start_1qsk3b$ = function (start, receiver, block) {
    this.initParentJob_8be2vx$();
    start.invoke_bmqrhp$(block, receiver, this);
  };
  AbstractCoroutine.prototype.invokeOnCompletion_ct2b2z$$default = function (onCancelling, invokeImmediately, handler) {
    return this.invokeOnCompletion_ct2b2z$(onCancelling, invokeImmediately, handler, JobSupport.prototype.invokeOnCompletion_ct2b2z$$default.bind(this));
  };
  AbstractCoroutine.prototype.cancel_dbl4no$$default = function (cause) {
    return this.cancel_dbl4no$(cause, JobSupport.prototype.cancel_dbl4no$$default.bind(this));
  };
  AbstractCoroutine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractCoroutine',
    interfaces: [CoroutineScope, Continuation, JobSupport, Job]
  };
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function CompletedExceptionally(cause, allowNullCause) {
    this.cause = cause;
    this._exception_j3ma66$_0 = this.cause;
    if (!(allowNullCause || this.cause != null)) {
      var message = 'Null cause is not allowed';
      throw IllegalArgumentException_init(message.toString());
    }
  }
  Object.defineProperty(CompletedExceptionally.prototype, 'exception', {
    get: function () {
      var tmp$;
      var tmp$_0;
      if ((tmp$ = this._exception_j3ma66$_0) != null)
        tmp$_0 = tmp$;
      else {
        var $receiver = this.createException();
        this._exception_j3ma66$_0 = $receiver;
        tmp$_0 = $receiver;
      }
      return tmp$_0;
    }
  });
  CompletedExceptionally.prototype.createException = function () {
    throw IllegalStateException_init('Completion exception was not specified'.toString());
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.exception + ']';
  };
  CompletedExceptionally.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompletedExceptionally',
    interfaces: []
  };
  function CompletedExceptionally_init(cause, $this) {
    $this = $this || Object.create(CompletedExceptionally.prototype);
    CompletedExceptionally.call($this, cause, false);
    return $this;
  }
  function Cancelled(job, cause) {
    CompletedExceptionally.call(this, cause, true);
    this.job_0 = job;
  }
  Cancelled.prototype.createException = function () {
    return new JobCancellationException('Job was cancelled normally', null, this.job_0);
  };
  Cancelled.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cancelled',
    interfaces: [CompletedExceptionally]
  };
  function CoroutineStart(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CoroutineStart_initFields() {
    CoroutineStart_initFields = function () {
    };
    CoroutineStart$DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart$LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart$ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart$UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  var CoroutineStart$DEFAULT_instance;
  function CoroutineStart$DEFAULT_getInstance() {
    CoroutineStart_initFields();
    return CoroutineStart$DEFAULT_instance;
  }
  var CoroutineStart$LAZY_instance;
  function CoroutineStart$LAZY_getInstance() {
    CoroutineStart_initFields();
    return CoroutineStart$LAZY_instance;
  }
  var CoroutineStart$ATOMIC_instance;
  function CoroutineStart$ATOMIC_getInstance() {
    CoroutineStart_initFields();
    return CoroutineStart$ATOMIC_instance;
  }
  var CoroutineStart$UNDISPATCHED_instance;
  function CoroutineStart$UNDISPATCHED_getInstance() {
    CoroutineStart_initFields();
    return CoroutineStart$UNDISPATCHED_instance;
  }
  CoroutineStart.prototype.invoke_c3kej2$ = function (block, completion) {
    switch (this.name) {
      case 'DEFAULT':
        startCoroutineCancellable(block, completion);
        break;
      case 'ATOMIC':
        startCoroutine(block, completion);
        break;
      case 'UNDISPATCHED':
        startCoroutineUndispatched(block, completion);
        break;
      case 'LAZY':
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  CoroutineStart.prototype.invoke_bmqrhp$ = function (block, receiver, completion) {
    switch (this.name) {
      case 'DEFAULT':
        startCoroutineCancellable_0(block, receiver, completion);
        break;
      case 'ATOMIC':
        startCoroutine_0(block, receiver, completion);
        break;
      case 'UNDISPATCHED':
        startCoroutineUndispatched_0(block, receiver, completion);
        break;
      case 'LAZY':
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  Object.defineProperty(CoroutineStart.prototype, 'isLazy', {
    get: function () {
      return this === CoroutineStart$LAZY_getInstance();
    }
  });
  CoroutineStart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoroutineStart',
    interfaces: [Enum]
  };
  function CoroutineStart$values() {
    return [CoroutineStart$DEFAULT_getInstance(), CoroutineStart$LAZY_getInstance(), CoroutineStart$ATOMIC_getInstance(), CoroutineStart$UNDISPATCHED_getInstance()];
  }
  CoroutineStart.values = CoroutineStart$values;
  function CoroutineStart$valueOf(name) {
    switch (name) {
      case 'DEFAULT':
        return CoroutineStart$DEFAULT_getInstance();
      case 'LAZY':
        return CoroutineStart$LAZY_getInstance();
      case 'ATOMIC':
        return CoroutineStart$ATOMIC_getInstance();
      case 'UNDISPATCHED':
        return CoroutineStart$UNDISPATCHED_getInstance();
      default:throwISE('No enum constant kotlinx.coroutines.experimental.CoroutineStart.' + name);
    }
  }
  CoroutineStart.valueOf_61zpoe$ = CoroutineStart$valueOf;
  var UNDEFINED;
  function DispatchedContinuation(dispatcher, continuation) {
    this.dispatcher = dispatcher;
    this.continuation = continuation;
    this._state_0 = UNDEFINED;
    this.resumeMode_fpnkpi$_0 = 0;
  }
  Object.defineProperty(DispatchedContinuation.prototype, 'resumeMode', {
    get: function () {
      return this.resumeMode_fpnkpi$_0;
    },
    set: function (resumeMode) {
      this.resumeMode_fpnkpi$_0 = resumeMode;
    }
  });
  DispatchedContinuation.prototype.takeState = function () {
    var state = this._state_0;
    if (!(state !== UNDEFINED)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    this._state_0 = UNDEFINED;
    return state;
  };
  Object.defineProperty(DispatchedContinuation.prototype, 'delegate', {
    get: function () {
      return this;
    }
  });
  DispatchedContinuation.prototype.resume_11rb$ = function (value) {
    var context = this.continuation.context;
    if (this.dispatcher.isDispatchNeeded_dvqyjb$(context)) {
      this._state_0 = value;
      this.resumeMode = MODE_ATOMIC_DEFAULT;
      this.dispatcher.dispatch_jts95w$(context, this);
    }
     else {
      this.context;
      this.continuation.resume_11rb$(value);
    }
  };
  DispatchedContinuation.prototype.resumeWithException_tcv7n7$ = function (exception) {
    var context = this.continuation.context;
    if (this.dispatcher.isDispatchNeeded_dvqyjb$(context)) {
      this._state_0 = CompletedExceptionally_init(exception);
      this.resumeMode = MODE_ATOMIC_DEFAULT;
      this.dispatcher.dispatch_jts95w$(context, this);
    }
     else {
      this.context;
      this.continuation.resumeWithException_tcv7n7$(exception);
    }
  };
  DispatchedContinuation.prototype.resumeCancellable_11rb$ = defineInlineFunction('kotlinx-coroutines-core-js.kotlinx.coroutines.experimental.DispatchedContinuation.resumeCancellable_11rb$', wrapFunction(function () {
    var experimental = _.kotlinx.coroutines.experimental;
    return function (value) {
      var context = this.continuation.context;
      if (this.dispatcher.isDispatchNeeded_dvqyjb$(context)) {
        this._state_0 = value;
        this.resumeMode = experimental.MODE_CANCELLABLE;
        this.dispatcher.dispatch_jts95w$(context, this);
      }
       else {
        this.context;
        this.continuation.resume_11rb$(value);
      }
    };
  }));
  DispatchedContinuation.prototype.resumeCancellableWithException_tcv7n7$ = defineInlineFunction('kotlinx-coroutines-core-js.kotlinx.coroutines.experimental.DispatchedContinuation.resumeCancellableWithException_tcv7n7$', wrapFunction(function () {
    var CompletedExceptionally_init = _.kotlinx.coroutines.experimental.CompletedExceptionally_init_tcv7n7$;
    var experimental = _.kotlinx.coroutines.experimental;
    return function (exception) {
      var context = this.continuation.context;
      if (this.dispatcher.isDispatchNeeded_dvqyjb$(context)) {
        this._state_0 = CompletedExceptionally_init(exception);
        this.resumeMode = experimental.MODE_CANCELLABLE;
        this.dispatcher.dispatch_jts95w$(context, this);
      }
       else {
        this.context;
        this.continuation.resumeWithException_tcv7n7$(exception);
      }
    };
  }));
  DispatchedContinuation.prototype.resumeUndispatched_11rb$ = defineInlineFunction('kotlinx-coroutines-core-js.kotlinx.coroutines.experimental.DispatchedContinuation.resumeUndispatched_11rb$', wrapFunction(function () {
    return function (value) {
      this.context;
      this.continuation.resume_11rb$(value);
    };
  }));
  DispatchedContinuation.prototype.resumeUndispatchedWithException_tcv7n7$ = defineInlineFunction('kotlinx-coroutines-core-js.kotlinx.coroutines.experimental.DispatchedContinuation.resumeUndispatchedWithException_tcv7n7$', wrapFunction(function () {
    return function (exception) {
      this.context;
      this.continuation.resumeWithException_tcv7n7$(exception);
    };
  }));
  DispatchedContinuation.prototype.dispatchYield_1c3m6u$ = function (value) {
    var context = this.continuation.context;
    this._state_0 = value;
    this.resumeMode = MODE_CANCELLABLE;
    this.dispatcher.dispatch_jts95w$(context, this);
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.dispatcher + ', ' + toDebugString(this.continuation) + ']';
  };
  Object.defineProperty(DispatchedContinuation.prototype, 'context', {
    get: function () {
      return this.continuation.context;
    }
  });
  DispatchedContinuation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DispatchedContinuation',
    interfaces: [DispatchedTask, Continuation]
  };
  function resumeCancellable($receiver, value) {
    if (Kotlin.isType($receiver, DispatchedContinuation)) {
      var context = $receiver.continuation.context;
      if ($receiver.dispatcher.isDispatchNeeded_dvqyjb$(context)) {
        $receiver._state_0 = value;
        $receiver.resumeMode = package$experimental.MODE_CANCELLABLE;
        $receiver.dispatcher.dispatch_jts95w$(context, $receiver);
      }
       else {
        $receiver.context;
        $receiver.continuation.resume_11rb$(value);
      }
    }
     else
      $receiver.resume_11rb$(value);
  }
  function resumeCancellableWithException($receiver, exception) {
    if (Kotlin.isType($receiver, DispatchedContinuation)) {
      var context = $receiver.continuation.context;
      if ($receiver.dispatcher.isDispatchNeeded_dvqyjb$(context)) {
        $receiver._state_0 = CompletedExceptionally_init(exception);
        $receiver.resumeMode = package$experimental.MODE_CANCELLABLE;
        $receiver.dispatcher.dispatch_jts95w$(context, $receiver);
      }
       else {
        $receiver.context;
        $receiver.continuation.resumeWithException_tcv7n7$(exception);
      }
    }
     else
      $receiver.resumeWithException_tcv7n7$(exception);
  }
  function resumeDirect($receiver, value) {
    if (Kotlin.isType($receiver, DispatchedContinuation))
      $receiver.continuation.resume_11rb$(value);
    else
      $receiver.resume_11rb$(value);
  }
  function resumeDirectWithException($receiver, exception) {
    if (Kotlin.isType($receiver, DispatchedContinuation))
      $receiver.continuation.resumeWithException_tcv7n7$(exception);
    else
      $receiver.resumeWithException_tcv7n7$(exception);
  }
  function DispatchedTask() {
  }
  Object.defineProperty(DispatchedTask.prototype, 'resumeMode', {
    get: function () {
      return MODE_CANCELLABLE;
    }
  });
  DispatchedTask.prototype.getSuccessfulResult_tpy1pm$ = function (state) {
    var tmp$;
    return (tmp$ = state) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  DispatchedTask.prototype.getExceptionalResult_s8jyv4$ = function (state) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = state, CompletedExceptionally) ? tmp$ : null) != null ? tmp$_0.exception : null;
  };
  DispatchedTask.prototype.run = function () {
    var tmp$;
    try {
      var delegate = Kotlin.isType(tmp$ = this.delegate, DispatchedContinuation) ? tmp$ : throwCCE();
      var continuation = delegate.continuation;
      var context = continuation.context;
      var job = get_isCancellableMode(this.resumeMode) ? context.get_8oh8b3$(Job$Key_getInstance()) : null;
      var state = this.takeState();
      if (job != null && !job.isActive)
        continuation.resumeWithException_tcv7n7$(job.getCancellationException());
      else {
        var exception = this.getExceptionalResult_s8jyv4$(state);
        if (exception != null)
          continuation.resumeWithException_tcv7n7$(exception);
        else
          continuation.resume_11rb$(this.getSuccessfulResult_tpy1pm$(state));
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw new DispatchException('Unexpected exception running ' + this, e);
      }
       else
        throw e;
    }
  };
  DispatchedTask.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DispatchedTask',
    interfaces: [Runnable]
  };
  function dispatch($receiver, mode) {
    if (mode === void 0)
      mode = MODE_CANCELLABLE;
    var useMode = mode;
    var delegate = $receiver.delegate;
    if (get_isDispatchedMode(mode) && Kotlin.isType(delegate, DispatchedContinuation) && get_isCancellableMode(mode) === get_isCancellableMode($receiver.resumeMode)) {
      var dispatcher = delegate.dispatcher;
      var context = delegate.context;
      if (dispatcher.isDispatchNeeded_dvqyjb$(context)) {
        dispatcher.dispatch_jts95w$(context, $receiver);
        return;
      }
       else {
        useMode = MODE_UNDISPATCHED;
      }
    }
    var state = $receiver.takeState();
    var exception = $receiver.getExceptionalResult_s8jyv4$(state);
    if (exception != null) {
      resumeWithExceptionMode(delegate, exception, useMode);
    }
     else {
      resumeMode(delegate, $receiver.getSuccessfulResult_tpy1pm$(state), useMode);
    }
  }
  var MODE_ATOMIC_DEFAULT;
  var MODE_CANCELLABLE;
  var MODE_DIRECT;
  var MODE_UNDISPATCHED;
  var MODE_IGNORE;
  function get_isCancellableMode($receiver) {
    return $receiver === MODE_CANCELLABLE;
  }
  function get_isDispatchedMode($receiver) {
    return $receiver === MODE_ATOMIC_DEFAULT || $receiver === MODE_CANCELLABLE;
  }
  function resumeMode($receiver, value, mode) {
    var tmp$;
    switch (mode) {
      case 0:
        $receiver.resume_11rb$(value);
        break;
      case 1:
        resumeCancellable($receiver, value);
        break;
      case 2:
        resumeDirect($receiver, value);
        break;
      case 3:
        var $this = Kotlin.isType(tmp$ = $receiver, DispatchedContinuation) ? tmp$ : throwCCE();
        $this.context;
        $this.continuation.resume_11rb$(value);
        break;
      case 4:
        break;
      default:throw IllegalStateException_init(('Invalid mode ' + mode).toString());
    }
  }
  function resumeWithExceptionMode($receiver, exception, mode) {
    var tmp$;
    switch (mode) {
      case 0:
        $receiver.resumeWithException_tcv7n7$(exception);
        break;
      case 1:
        resumeCancellableWithException($receiver, exception);
        break;
      case 2:
        resumeDirectWithException($receiver, exception);
        break;
      case 3:
        var $this = Kotlin.isType(tmp$ = $receiver, DispatchedContinuation) ? tmp$ : throwCCE();
        $this.context;
        $this.continuation.resumeWithException_tcv7n7$(exception);
        break;
      case 4:
        break;
      default:throw IllegalStateException_init(('Invalid mode ' + mode).toString());
    }
  }
  function Symbol(symbol) {
    this.symbol = symbol;
  }
  Symbol.prototype.toString = function () {
    return this.symbol;
  };
  Symbol.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Symbol',
    interfaces: []
  };
  function startCoroutineCancellable($receiver, completion) {
    resumeCancellable(createCoroutineUnchecked($receiver, completion), Unit);
  }
  function startCoroutineCancellable_0($receiver, receiver, completion) {
    resumeCancellable(createCoroutineUnchecked_0($receiver, receiver, completion), Unit);
  }
  function startCoroutineUndispatched($receiver, completion) {
    var tmp$, tmp$_0;
    try {
      tmp$ = $receiver(completion, false);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        completion.resumeWithException_tcv7n7$(e);
        return;
      }
       else
        throw e;
    }
    var value = tmp$;
    if (value !== COROUTINE_SUSPENDED) {
      completion.resume_11rb$((tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
    }
  }
  function startCoroutineUndispatched_0($receiver, receiver, completion) {
    var tmp$, tmp$_0;
    try {
      tmp$ = $receiver(receiver, completion, false);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        completion.resumeWithException_tcv7n7$(e);
        return;
      }
       else
        throw e;
    }
    var value = tmp$;
    if (value !== COROUTINE_SUSPENDED) {
      completion.resume_11rb$((tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
    }
  }
  function startUndispatchedOrReturn($receiver, block) {
    $receiver.initParentJob_8be2vx$();
    var tmp$, tmp$_0;
    try {
      tmp$ = block($receiver, false);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$ = CompletedExceptionally_init(e);
      }
       else
        throw e;
    }
    var result = tmp$;
    if (result === COROUTINE_SUSPENDED)
      tmp$_0 = COROUTINE_SUSPENDED;
    else if ($receiver.makeCompletingOnce_42w2xh$(result, MODE_IGNORE))
      if (Kotlin.isType(result, CompletedExceptionally))
        throw result.exception;
      else
        tmp$_0 = result;
    else
      tmp$_0 = COROUTINE_SUSPENDED;
    return tmp$_0;
  }
  function startUndispatchedOrReturn_0($receiver, receiver, block) {
    $receiver.initParentJob_8be2vx$();
    var tmp$, tmp$_0;
    try {
      tmp$ = block(receiver, $receiver, false);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$ = CompletedExceptionally_init(e);
      }
       else
        throw e;
    }
    var result = tmp$;
    if (result === COROUTINE_SUSPENDED)
      tmp$_0 = COROUTINE_SUSPENDED;
    else if ($receiver.makeCompletingOnce_42w2xh$(result, MODE_IGNORE))
      if (Kotlin.isType(result, CompletedExceptionally))
        throw result.exception;
      else
        tmp$_0 = result;
    else
      tmp$_0 = COROUTINE_SUSPENDED;
    return tmp$_0;
  }
  function undispatchedResult($receiver, startBlock) {
    var tmp$, tmp$_0;
    try {
      tmp$ = startBlock();
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$ = CompletedExceptionally_init(e);
      }
       else
        throw e;
    }
    var result = tmp$;
    if (result === COROUTINE_SUSPENDED)
      tmp$_0 = COROUTINE_SUSPENDED;
    else if ($receiver.makeCompletingOnce_42w2xh$(result, MODE_IGNORE))
      if (Kotlin.isType(result, CompletedExceptionally))
        throw result.exception;
      else
        tmp$_0 = result;
    else
      tmp$_0 = COROUTINE_SUSPENDED;
    return tmp$_0;
  }
  var UNDECIDED;
  var SUSPENDED;
  var RESUMED;
  function AbstractContinuation(delegate, resumeMode) {
    JobSupport.call(this, true);
    this.delegate_8vztre$_0 = delegate;
    this.resumeMode_enh867$_0 = resumeMode;
    this.decision_0 = UNDECIDED;
  }
  Object.defineProperty(AbstractContinuation.prototype, 'delegate', {
    get: function () {
      return this.delegate_8vztre$_0;
    }
  });
  Object.defineProperty(AbstractContinuation.prototype, 'resumeMode', {
    get: function () {
      return this.resumeMode_enh867$_0;
    }
  });
  AbstractContinuation.prototype.takeState = function () {
    return this.state_8be2vx$;
  };
  AbstractContinuation.prototype.trySuspend_0 = function () {
    switch (this.decision_0) {
      case 0:
        this.decision_0 = SUSPENDED;
        return true;
      case 2:
        return false;
      default:throw IllegalStateException_init('Already suspended'.toString());
    }
  };
  AbstractContinuation.prototype.tryResume_0 = function () {
    switch (this.decision_0) {
      case 0:
        this.decision_0 = RESUMED;
        return true;
      case 1:
        return false;
      default:throw IllegalStateException_init('Already resumed'.toString());
    }
  };
  AbstractContinuation.prototype.getResult = function () {
    if (this.trySuspend_0())
      return COROUTINE_SUSPENDED;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, CompletedExceptionally))
      throw state.exception;
    return this.getSuccessfulResult_tpy1pm$(state);
  };
  AbstractContinuation.prototype.onCompletionInternal_cypnoy$ = function (state, mode) {
    if (this.tryResume_0())
      return;
    dispatch(this, mode);
  };
  AbstractContinuation.prototype.resume_11rb$ = function (value) {
    this.resumeImpl_0(value, this.resumeMode);
  };
  AbstractContinuation.prototype.resumeWithException_tcv7n7$ = function (exception) {
    this.resumeImpl_0(CompletedExceptionally_init(exception), this.resumeMode);
  };
  AbstractContinuation.prototype.resumeImpl_0 = function (proposedUpdate, resumeMode) {
    var tmp$;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, JobSupport$Incomplete))
      tmp$ = this.updateState_42w2xh$(proposedUpdate, resumeMode);
    else if (Kotlin.isType(state, Cancelled)) {
      if (Kotlin.isType(proposedUpdate, CompletedExceptionally) && !equals(proposedUpdate.exception, state.exception))
        this.handleException_tcv7n7$(proposedUpdate.exception);
      return;
    }
     else {
      throw IllegalStateException_init(('Already resumed, but got ' + toString(proposedUpdate)).toString());
    }
    return tmp$;
  };
  AbstractContinuation.prototype.handleException_tcv7n7$ = function (exception) {
    handleCoroutineException(this.context, exception);
  };
  AbstractContinuation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractContinuation',
    interfaces: [DispatchedTask, Continuation, JobSupport]
  };
  function launch(context, start, parent, block) {
    if (context === void 0)
      context = DefaultDispatcher;
    if (start === void 0)
      start = CoroutineStart$DEFAULT_getInstance();
    if (parent === void 0)
      parent = null;
    var newContext = newCoroutineContext(context, parent);
    var coroutine = start.isLazy ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.start_1qsk3b$(start, coroutine, block);
    return coroutine;
  }
  function withContext$lambda(closure$context, closure$block, closure$start) {
    return function (cont) {
      var oldContext = cont.context;
      if (closure$context === oldContext || (Kotlin.isType(closure$context, CoroutineContext$Element) && oldContext.get_8oh8b3$(closure$context.key) === closure$context)) {
        return closure$block(cont, false);
      }
      var newContext = oldContext.plus_dvqyjb$(closure$context);
      if (newContext === oldContext) {
        return closure$block(cont, false);
      }
      if (equals(newContext.get_8oh8b3$(ContinuationInterceptor.Key), oldContext.get_8oh8b3$(ContinuationInterceptor.Key))) {
        var newContinuation = new RunContinuationDirect(newContext, cont);
        return closure$block(newContinuation, false);
      }
      var value = !closure$start.isLazy;
      if (!value) {
        var message = closure$start.toString() + ' start is not supported';
        throw IllegalArgumentException_init(message.toString());
      }
      var completion = new RunCompletion(newContext, cont, closure$start === CoroutineStart$ATOMIC_getInstance() ? MODE_ATOMIC_DEFAULT : MODE_CANCELLABLE);
      completion.initParentJobInternal_x4lgmv$(newContext.get_8oh8b3$(Job$Key_getInstance()));
      closure$start.invoke_c3kej2$(closure$block, completion);
      return completion.getResult();
    };
  }
  function withContext(context, start, block, continuation) {
    if (start === void 0)
      start = CoroutineStart$DEFAULT_getInstance();
    return withContext$lambda(context, block, start)(continuation.facade);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, active);
    this.parentContext_0 = parentContext;
  }
  StandaloneCoroutine.prototype.hasOnFinishingHandler_s8jyv4$ = function (update) {
    return Kotlin.isType(update, CompletedExceptionally);
  };
  StandaloneCoroutine.prototype.onFinishingInternal_s8jyv4$ = function (update) {
    if (Kotlin.isType(update, CompletedExceptionally))
      handleCoroutineException(this.parentContext_0, update.exception);
  };
  StandaloneCoroutine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StandaloneCoroutine',
    interfaces: [AbstractCoroutine]
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.block_0 = block;
  }
  LazyStandaloneCoroutine.prototype.onStart = function () {
    startCoroutineCancellable_0(this.block_0, this, this);
  };
  LazyStandaloneCoroutine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LazyStandaloneCoroutine',
    interfaces: [StandaloneCoroutine]
  };
  function RunContinuationDirect(context, continuation) {
    this.context_j8kok8$_0 = context;
    this.$delegate_l8rxcv$_0 = continuation;
  }
  Object.defineProperty(RunContinuationDirect.prototype, 'context', {
    get: function () {
      return this.context_j8kok8$_0;
    }
  });
  RunContinuationDirect.prototype.resume_11rb$ = function (value) {
    return this.$delegate_l8rxcv$_0.resume_11rb$(value);
  };
  RunContinuationDirect.prototype.resumeWithException_tcv7n7$ = function (exception) {
    return this.$delegate_l8rxcv$_0.resumeWithException_tcv7n7$(exception);
  };
  RunContinuationDirect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RunContinuationDirect',
    interfaces: [Continuation]
  };
  function RunCompletion(context, delegate, resumeMode) {
    AbstractContinuation.call(this, delegate, resumeMode);
    this.context_17qr5w$_0 = context;
  }
  Object.defineProperty(RunCompletion.prototype, 'context', {
    get: function () {
      return this.context_17qr5w$_0;
    }
  });
  RunCompletion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RunCompletion',
    interfaces: [AbstractContinuation]
  };
  function CancellableContinuation() {
  }
  CancellableContinuation.prototype.tryResume_19pj23$ = function (value, idempotent, callback$default) {
    if (idempotent === void 0)
      idempotent = null;
    return callback$default ? callback$default(value, idempotent) : this.tryResume_19pj23$$default(value, idempotent);
  };
  CancellableContinuation.prototype.cancel_dbl4no$ = function (cause, callback$default) {
    if (cause === void 0)
      cause = null;
    return callback$default ? callback$default(cause) : this.cancel_dbl4no$$default(cause);
  };
  CancellableContinuation.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CancellableContinuation',
    interfaces: [Continuation]
  };
  function suspendCancellableCoroutine(holdCancellability_0, block_0, continuation) {
    if (holdCancellability_0 === void 0)
      holdCancellability_0 = false;
    return suspendCancellableCoroutine$lambda(holdCancellability_0, block_0)(continuation.facade);
  }
  defineInlineFunction('kotlinx-coroutines-core-js.kotlinx.coroutines.experimental.suspendCancellableCoroutine_z67fre$', wrapFunction(function () {
    var experimental = _.kotlinx.coroutines.experimental;
    var CancellableContinuationImpl_init = _.kotlinx.coroutines.experimental.CancellableContinuationImpl;
    function suspendCancellableCoroutine$lambda(closure$holdCancellability, closure$block) {
      return function (cont) {
        var cancellable = new CancellableContinuationImpl_init(cont, experimental.MODE_CANCELLABLE);
        if (!closure$holdCancellability)
          cancellable.initCancellability();
        closure$block(cancellable);
        return cancellable.getResult();
      };
    }
    return function (holdCancellability_0, block_0, continuation) {
      if (holdCancellability_0 === void 0)
        holdCancellability_0 = false;
      Kotlin.suspendCall(suspendCancellableCoroutine$lambda(holdCancellability_0, block_0)(Kotlin.coroutineReceiver().facade));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function suspendAtomicCancellableCoroutine(holdCancellability_0, block_0, continuation) {
    if (holdCancellability_0 === void 0)
      holdCancellability_0 = false;
    return suspendAtomicCancellableCoroutine$lambda(holdCancellability_0, block_0)(continuation.facade);
  }
  defineInlineFunction('kotlinx-coroutines-core-js.kotlinx.coroutines.experimental.suspendAtomicCancellableCoroutine_z67fre$', wrapFunction(function () {
    var experimental = _.kotlinx.coroutines.experimental;
    var CancellableContinuationImpl_init = _.kotlinx.coroutines.experimental.CancellableContinuationImpl;
    function suspendAtomicCancellableCoroutine$lambda(closure$holdCancellability, closure$block) {
      return function (cont) {
        var cancellable = new CancellableContinuationImpl_init(cont, experimental.MODE_ATOMIC_DEFAULT);
        if (!closure$holdCancellability)
          cancellable.initCancellability();
        closure$block(cancellable);
        return cancellable.getResult();
      };
    }
    return function (holdCancellability_0, block_0, continuation) {
      if (holdCancellability_0 === void 0)
        holdCancellability_0 = false;
      Kotlin.suspendCall(suspendAtomicCancellableCoroutine$lambda(holdCancellability_0, block_0)(Kotlin.coroutineReceiver().facade));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function CancellableContinuationImpl(delegate, resumeMode) {
    AbstractContinuation.call(this, delegate, resumeMode);
    this._context_0 = null;
  }
  Object.defineProperty(CancellableContinuationImpl.prototype, 'context', {
    get: function () {
      var tmp$;
      var tmp$_0;
      if ((tmp$ = this._context_0) != null)
        tmp$_0 = tmp$;
      else {
        var $receiver = this.delegate.context.plus_dvqyjb$(this);
        this._context_0 = $receiver;
        tmp$_0 = $receiver;
      }
      return tmp$_0;
    }
  });
  CancellableContinuationImpl.prototype.initCancellability = function () {
    this.initParentJobInternal_x4lgmv$(this.delegate.context.get_8oh8b3$(Job$Key_getInstance()));
  };
  Object.defineProperty(CancellableContinuationImpl.prototype, 'onCancelMode', {
    get: function () {
      return ON_CANCEL_MAKE_CANCELLED;
    }
  });
  CancellableContinuationImpl.prototype.tryResume_19pj23$$default = function (value, idempotent) {
    var tmp$;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, JobSupport$Incomplete)) {
      var update = idempotent == null ? value : new CompletedIdempotentResult(idempotent, value, state);
      this.tryUpdateState_8ea4ql$(update);
      tmp$ = state;
    }
     else if (Kotlin.isType(state, CompletedIdempotentResult))
      if (state.idempotentResume === idempotent) {
        if (!(state.result === value)) {
          var message = 'Non-idempotent resume';
          throw IllegalStateException_init(message.toString());
        }
        tmp$ = state.token;
      }
       else
        tmp$ = null;
    else
      tmp$ = null;
    return tmp$;
  };
  CancellableContinuationImpl.prototype.tryResumeWithException_tcv7n7$ = function (exception) {
    var tmp$;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, JobSupport$Incomplete)) {
      this.tryUpdateState_8ea4ql$(CompletedExceptionally_init(exception));
      tmp$ = state;
    }
     else
      tmp$ = null;
    return tmp$;
  };
  CancellableContinuationImpl.prototype.completeResume_za3rmp$ = function (token) {
    var tmp$;
    this.completeUpdateState_v83ddl$(Kotlin.isType(tmp$ = token, JobSupport$Incomplete) ? tmp$ : throwCCE(), this.state_8be2vx$, this.resumeMode);
  };
  CancellableContinuationImpl.prototype.invokeOnCompletion_f05bi3$ = function (handler) {
    return this.invokeOnCompletion_ct2b2z$(false, true, handler);
  };
  CancellableContinuationImpl.prototype.resumeUndispatched_276mab$ = function ($receiver, value) {
    var tmp$;
    var dc = Kotlin.isType(tmp$ = this.delegate, DispatchedContinuation) ? tmp$ : null;
    this.resumeImpl_0(value, (dc != null ? dc.dispatcher : null) === $receiver ? MODE_UNDISPATCHED : this.resumeMode);
  };
  CancellableContinuationImpl.prototype.resumeUndispatchedWithException_eq13df$ = function ($receiver, exception) {
    var tmp$;
    var dc = Kotlin.isType(tmp$ = this.delegate, DispatchedContinuation) ? tmp$ : null;
    this.resumeImpl_0(CompletedExceptionally_init(exception), (dc != null ? dc.dispatcher : null) === $receiver ? MODE_UNDISPATCHED : this.resumeMode);
  };
  CancellableContinuationImpl.prototype.getSuccessfulResult_tpy1pm$ = function (state) {
    var tmp$, tmp$_0;
    return Kotlin.isType(state, CompletedIdempotentResult) ? (tmp$ = state.result) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE() : (tmp$_0 = state) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  CancellableContinuationImpl.prototype.nameString = function () {
    return 'CancellableContinuation(' + toDebugString(this.delegate) + ')';
  };
  CancellableContinuationImpl.prototype.cancel_dbl4no$$default = function (cause) {
    return this.cancel_dbl4no$(cause, AbstractContinuation.prototype.cancel_dbl4no$$default.bind(this));
  };
  CancellableContinuationImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CancellableContinuationImpl',
    interfaces: [CancellableContinuation, AbstractContinuation]
  };
  function CompletedIdempotentResult(idempotentResume, result, token) {
    this.idempotentResume = idempotentResume;
    this.result = result;
    this.token = token;
  }
  CompletedIdempotentResult.prototype.toString = function () {
    return 'CompletedIdempotentResult[' + toString(this.result) + ']';
  };
  CompletedIdempotentResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompletedIdempotentResult',
    interfaces: []
  };
  function CompletableDeferred() {
  }
  CompletableDeferred.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CompletableDeferred',
    interfaces: [Deferred]
  };
  function CompletableDeferred_0(parent) {
    if (parent === void 0)
      parent = null;
    return new CompletableDeferredImpl(parent);
  }
  function CompletableDeferred_1(value) {
    var $receiver = new CompletableDeferredImpl(null);
    $receiver.complete_11rb$(value);
    return $receiver;
  }
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJobInternal_x4lgmv$(parent);
  }
  Object.defineProperty(CompletableDeferredImpl.prototype, 'onCancelMode', {
    get: function () {
      return ON_CANCEL_MAKE_COMPLETING;
    }
  });
  CompletableDeferredImpl.prototype.getCompleted = function () {
    var tmp$;
    return (tmp$ = this.getCompletedInternal_8be2vx$()) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  CompletableDeferredImpl.prototype.await = function (continuation_0, suspended) {
    var instance = new Coroutine$await(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$await($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$await.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$await.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await.prototype.constructor = Coroutine$await;
  Coroutine$await.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.awaitInternal_8be2vx$(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return (tmp$ = this.result_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  CompletableDeferredImpl.prototype.complete_11rb$ = function (value) {
    return this.makeCompleting_8ea4ql$(value);
  };
  CompletableDeferredImpl.prototype.completeExceptionally_tcv7n7$ = function (exception) {
    return this.makeCompleting_8ea4ql$(CompletedExceptionally_init(exception));
  };
  CompletableDeferredImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompletableDeferredImpl',
    interfaces: [CompletableDeferred, JobSupport]
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.isDispatchNeeded_dvqyjb$ = function (context) {
    return false;
  };
  Unconfined.prototype.dispatch_jts95w$ = function (context, block) {
    throw UnsupportedOperationException_init();
  };
  Unconfined.prototype.toString = function () {
    return 'Unconfined';
  };
  Unconfined.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Unconfined',
    interfaces: [CoroutineDispatcher]
  };
  var Unconfined_instance = null;
  function Unconfined_getInstance() {
    if (Unconfined_instance === null) {
      new Unconfined();
    }
    return Unconfined_instance;
  }
  var DefaultDispatcher;
  function newCoroutineContext(context, parent) {
    if (parent === void 0)
      parent = null;
    var wp = parent == null ? context : context.plus_dvqyjb$(parent);
    return context !== DefaultDispatcher && context.get_8oh8b3$(ContinuationInterceptor.Key) == null ? wp.plus_dvqyjb$(DefaultDispatcher) : wp;
  }
  var withCoroutineContext = defineInlineFunction('kotlinx-coroutines-core-js.kotlinx.coroutines.experimental.withCoroutineContext_ms9kem$', function (context, block) {
    return block();
  });
  function toDebugString($receiver) {
    return $receiver.toString();
  }
  function get_coroutineName($receiver) {
    return null;
  }
  function CoroutineDispatcher() {
    AbstractCoroutineContextElement.call(this, ContinuationInterceptor.Key);
  }
  CoroutineDispatcher.prototype.isDispatchNeeded_dvqyjb$ = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.interceptContinuation_n4f53e$ = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoroutineDispatcher',
    interfaces: [ContinuationInterceptor, AbstractCoroutineContextElement]
  };
  function Runnable() {
  }
  Runnable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Runnable',
    interfaces: []
  };
  function handleCoroutineException(context, exception) {
    var tmp$, tmp$_0;
    if ((tmp$ = context.get_8oh8b3$(CoroutineExceptionHandler$Key_getInstance())) != null) {
      tmp$.handleException_y5fbjc$(context, exception);
      return;
    }
    if (Kotlin.isType(exception, CancellationException))
      return;
    (tmp$_0 = context.get_8oh8b3$(Job$Key_getInstance())) != null ? tmp$_0.cancel_dbl4no$(exception) : null;
    console.error(exception);
  }
  function CoroutineExceptionHandler() {
    CoroutineExceptionHandler$Key_getInstance();
  }
  function CoroutineExceptionHandler$Key() {
    CoroutineExceptionHandler$Key_instance = this;
  }
  CoroutineExceptionHandler$Key.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Key',
    interfaces: [CoroutineContext$Key]
  };
  var CoroutineExceptionHandler$Key_instance = null;
  function CoroutineExceptionHandler$Key_getInstance() {
    if (CoroutineExceptionHandler$Key_instance === null) {
      new CoroutineExceptionHandler$Key();
    }
    return CoroutineExceptionHandler$Key_instance;
  }
  CoroutineExceptionHandler.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CoroutineExceptionHandler',
    interfaces: [CoroutineContext$Element]
  };
  var CoroutineExceptionHandler_0 = defineInlineFunction('kotlinx-coroutines-core-js.kotlinx.coroutines.experimental.CoroutineExceptionHandler_av07nd$', wrapFunction(function () {
    var AbstractCoroutineContextElement = Kotlin.kotlin.coroutines.experimental.AbstractCoroutineContextElement;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var CoroutineExceptionHandler = _.kotlinx.coroutines.experimental.CoroutineExceptionHandler;
    CoroutineExceptionHandler$ObjectLiteral.prototype = Object.create(AbstractCoroutineContextElement.prototype);
    CoroutineExceptionHandler$ObjectLiteral.prototype.constructor = CoroutineExceptionHandler$ObjectLiteral;
    function CoroutineExceptionHandler$ObjectLiteral(closure$handler, key) {
      this.closure$handler = closure$handler;
      AbstractCoroutineContextElement.call(this, key);
    }
    CoroutineExceptionHandler$ObjectLiteral.prototype.handleException_y5fbjc$ = function (context, exception) {
      this.closure$handler(context, exception);
    };
    CoroutineExceptionHandler$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [CoroutineExceptionHandler, AbstractCoroutineContextElement]
    };
    return function (handler) {
      return new CoroutineExceptionHandler$ObjectLiteral(handler, CoroutineExceptionHandler.Key);
    };
  }));
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CoroutineScope',
    interfaces: []
  };
  function get_classSimpleName($receiver) {
    var tmp$;
    return (tmp$ = Kotlin.getKClassFromExpression($receiver).simpleName) != null ? tmp$ : 'Unknown';
  }
  function Deferred() {
  }
  Deferred.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Deferred',
    interfaces: [Job]
  };
  function async(context, start, parent, block) {
    if (context === void 0)
      context = DefaultDispatcher;
    if (start === void 0)
      start = CoroutineStart$DEFAULT_getInstance();
    if (parent === void 0)
      parent = null;
    var newContext = newCoroutineContext(context, parent);
    var coroutine = start.isLazy ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.start_1qsk3b$(start, coroutine, block);
    return coroutine;
  }
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, active);
  }
  DeferredCoroutine.prototype.getCompleted = function () {
    var tmp$;
    return (tmp$ = this.getCompletedInternal_8be2vx$()) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  DeferredCoroutine.prototype.await = function (continuation_0, suspended) {
    var instance = new Coroutine$await_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$await_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$await_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$await_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await_0.prototype.constructor = Coroutine$await_0;
  Coroutine$await_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.awaitInternal_8be2vx$(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return (tmp$ = this.result_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DeferredCoroutine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeferredCoroutine',
    interfaces: [Deferred, AbstractCoroutine]
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.block_0 = block;
  }
  LazyDeferredCoroutine.prototype.onStart = function () {
    startCoroutineCancellable_0(this.block_0, this, this);
  };
  LazyDeferredCoroutine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LazyDeferredCoroutine',
    interfaces: [DeferredCoroutine]
  };
  function Delay() {
  }
  Delay.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Delay',
    interfaces: []
  };
  function delay$lambda(closure$time) {
    return function (cont) {
      get_delay(cont.context).scheduleResumeAfterDelay_v08vrn$(closure$time, cont);
      return Unit;
    };
  }
  function suspendCancellableCoroutine$lambda(closure$holdCancellability, closure$block) {
    return function (cont) {
      var cancellable = new CancellableContinuationImpl(cont, package$experimental.MODE_CANCELLABLE);
      if (!closure$holdCancellability)
        cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  function delay(time, continuation) {
    if (!(time >= 0)) {
      var message = 'Delay time ' + time + ' cannot be negative';
      throw IllegalArgumentException_init(message.toString());
    }
    if (time <= 0)
      return;
    return suspendCancellableCoroutine$lambda(false, delay$lambda(time))(continuation.facade);
  }
  function get_delay($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = Kotlin.isType(tmp$ = $receiver.get_8oh8b3$(ContinuationInterceptor.Key), Delay) ? tmp$ : null) != null ? tmp$_1 : Kotlin.isType(tmp$_0 = DefaultDispatcher, Delay) ? tmp$_0 : throwCCE();
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init(withCause(message, cause), this);
    this.cause_j1vl5g$_0 = cause;
    this.name = 'CompletionHandlerException';
  }
  Object.defineProperty(CompletionHandlerException.prototype, 'cause', {
    get: function () {
      return this.cause_j1vl5g$_0;
    }
  });
  CompletionHandlerException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompletionHandlerException',
    interfaces: [RuntimeException]
  };
  function CancellationException(message) {
    IllegalStateException_init(message, this);
    this.name = 'CancellationException';
  }
  CancellationException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CancellationException',
    interfaces: [IllegalStateException]
  };
  function JobCancellationException(message, cause, job) {
    CancellationException.call(this, withCause(message, cause));
    this.cause_v7pqee$_0 = cause;
    this.job = job;
    this.name = 'JobCancellationException';
  }
  Object.defineProperty(JobCancellationException.prototype, 'cause', {
    get: function () {
      return this.cause_v7pqee$_0;
    }
  });
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.job;
  };
  JobCancellationException.prototype.equals = function (other) {
    return other === this || (Kotlin.isType(other, JobCancellationException) && equals(other.message, this.message) && equals(other.job, this.job) && equals(other.cause, this.cause));
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp$, tmp$_0;
    return (((hashCode(ensureNotNull(this.message)) * 31 | 0) + hashCode(this.job) | 0) * 31 | 0) + ((tmp$_0 = (tmp$ = this.cause) != null ? hashCode(tmp$) : null) != null ? tmp$_0 : 0) | 0;
  };
  JobCancellationException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JobCancellationException',
    interfaces: [CancellationException]
  };
  function TimeoutCancellationException(message, coroutine) {
    CancellationException.call(this, message);
    this.coroutine_8be2vx$ = coroutine;
    this.name = 'TimeoutCancellationException';
  }
  TimeoutCancellationException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeoutCancellationException',
    interfaces: [CancellationException]
  };
  function TimeoutCancellationException_init(message, $this) {
    $this = $this || Object.create(TimeoutCancellationException.prototype);
    TimeoutCancellationException.call($this, message, null);
    return $this;
  }
  function TimeoutCancellationException_0(time, coroutine) {
    return new TimeoutCancellationException('Timed out waiting for ' + time, coroutine);
  }
  function DispatchException(message, cause) {
    RuntimeException_init(withCause(message, cause), this);
    this.name = 'DispatchException';
  }
  DispatchException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DispatchException',
    interfaces: [RuntimeException]
  };
  function IllegalStateException_0(message, cause) {
    return IllegalStateException_init(withCause(message, cause));
  }
  function withCause($receiver, cause) {
    return cause == null ? $receiver : $receiver + '; caused by ' + toString(cause);
  }
  function NodeDispatcher() {
    CoroutineDispatcher.call(this);
  }
  function NodeDispatcher$dispatch$lambda(closure$block) {
    return function () {
      closure$block.run();
      return Unit;
    };
  }
  NodeDispatcher.prototype.dispatch_jts95w$ = function (context, block) {
    setTimeout(NodeDispatcher$dispatch$lambda(block), 0);
  };
  function NodeDispatcher$scheduleResumeAfterDelay$lambda(closure$continuation, this$NodeDispatcher) {
    return function () {
      var receiver = closure$continuation;
      receiver.resumeUndispatched_276mab$(this$NodeDispatcher, Unit);
      return Unit;
    };
  }
  NodeDispatcher.prototype.scheduleResumeAfterDelay_v08vrn$ = function (time, continuation) {
    setTimeout(NodeDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), coerceAtLeast(time, 0));
  };
  function NodeDispatcher$invokeOnTimeout$lambda(closure$block) {
    return function () {
      closure$block.run();
      return Unit;
    };
  }
  function NodeDispatcher$invokeOnTimeout$ObjectLiteral(closure$handle) {
    this.closure$handle = closure$handle;
  }
  NodeDispatcher$invokeOnTimeout$ObjectLiteral.prototype.dispose = function () {
    clearTimeout(this.closure$handle);
  };
  NodeDispatcher$invokeOnTimeout$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DisposableHandle]
  };
  NodeDispatcher.prototype.invokeOnTimeout_ebrsoh$ = function (time, block) {
    var handle = setTimeout(NodeDispatcher$invokeOnTimeout$lambda(block), coerceAtLeast(time, 0));
    return new NodeDispatcher$invokeOnTimeout$ObjectLiteral(handle);
  };
  NodeDispatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeDispatcher',
    interfaces: [Delay, CoroutineDispatcher]
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.window_0 = window_0;
    this.messageName_0 = 'dispatchCoroutine';
    this.queue_0 = new WindowDispatcher$queue$ObjectLiteral(this);
    this.window_0.addEventListener('message', WindowDispatcher_init$lambda(this), true);
  }
  WindowDispatcher.prototype.dispatch_jts95w$ = function (context, block) {
    this.queue_0.enqueue_id2gbd$(block);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda(closure$continuation, this$WindowDispatcher) {
    return function () {
      var receiver = closure$continuation;
      receiver.resumeUndispatched_276mab$(this$WindowDispatcher, Unit);
      return Unit;
    };
  }
  WindowDispatcher.prototype.scheduleResumeAfterDelay_v08vrn$ = function (time, continuation) {
    this.window_0.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), coerceAtLeast(time, 0));
  };
  function WindowDispatcher$invokeOnTimeout$lambda(closure$block) {
    return function () {
      closure$block.run();
      return Unit;
    };
  }
  function WindowDispatcher$invokeOnTimeout$ObjectLiteral(this$WindowDispatcher, closure$handle) {
    this.this$WindowDispatcher = this$WindowDispatcher;
    this.closure$handle = closure$handle;
  }
  WindowDispatcher$invokeOnTimeout$ObjectLiteral.prototype.dispose = function () {
    this.this$WindowDispatcher.window_0.clearTimeout(this.closure$handle);
  };
  WindowDispatcher$invokeOnTimeout$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DisposableHandle]
  };
  WindowDispatcher.prototype.invokeOnTimeout_ebrsoh$ = function (time, block) {
    var handle = this.window_0.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), coerceAtLeast(time, 0));
    return new WindowDispatcher$invokeOnTimeout$ObjectLiteral(this, handle);
  };
  function WindowDispatcher$queue$ObjectLiteral(this$WindowDispatcher) {
    this.this$WindowDispatcher = this$WindowDispatcher;
    MessageQueue.call(this);
  }
  WindowDispatcher$queue$ObjectLiteral.prototype.schedule = function () {
    this.this$WindowDispatcher.window_0.postMessage(this.this$WindowDispatcher.messageName_0, '*');
  };
  WindowDispatcher$queue$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MessageQueue]
  };
  function WindowDispatcher_init$lambda(this$WindowDispatcher) {
    return function (event) {
      if (event.source == this$WindowDispatcher.window_0 && event.data == this$WindowDispatcher.messageName_0) {
        event.stopPropagation();
        this$WindowDispatcher.queue_0.process();
      }
      return Unit;
    };
  }
  WindowDispatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WindowDispatcher',
    interfaces: [Delay, CoroutineDispatcher]
  };
  function MessageQueue() {
    Queue.call(this);
    this.yieldEvery = 16;
    this.scheduled_0 = false;
  }
  MessageQueue.prototype.enqueue_id2gbd$ = function (element) {
    this.add_trkh7z$(element);
    if (!this.scheduled_0) {
      this.scheduled_0 = true;
      this.schedule();
    }
  };
  MessageQueue.prototype.process = function () {
    try {
      var tmp$;
      tmp$ = this.yieldEvery - 1 | 0;
      for (var index = 0; index <= tmp$; index++) {
        var tmp$_0;
        tmp$_0 = this.poll();
        if (tmp$_0 == null) {
          return;
        }
        var element = tmp$_0;
        element.run();
      }
    }
    finally {
      if (this.isEmpty) {
        this.scheduled_0 = false;
      }
       else {
        this.schedule();
      }
    }
  };
  MessageQueue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessageQueue',
    interfaces: [Queue]
  };
  function Queue() {
    this.queue_0 = Kotlin.newArray(8, null);
    this.head_0 = 0;
    this.tail_0 = 0;
  }
  Object.defineProperty(Queue.prototype, 'isEmpty', {
    get: function () {
      return this.head_0 === this.tail_0;
    }
  });
  Queue.prototype.poll = function () {
    var tmp$;
    if (this.isEmpty)
      return null;
    var result = ensureNotNull(this.queue_0[this.head_0]);
    this.queue_0[this.head_0] = null;
    this.head_0 = this.next_0(this.head_0);
    return Kotlin.isType(tmp$ = result, Any) ? tmp$ : throwCCE();
  };
  Queue.prototype.add_trkh7z$ = function (element) {
    var newTail = this.next_0(this.tail_0);
    if (newTail === this.head_0) {
      this.resize_0();
      this.add_trkh7z$(element);
      return;
    }
    this.queue_0[this.tail_0] = element;
    this.tail_0 = newTail;
  };
  Queue.prototype.resize_0 = function () {
    var tmp$;
    var i = this.head_0;
    var j = 0;
    var a = Kotlin.newArray(this.queue_0.length * 2 | 0, null);
    while (i !== this.tail_0) {
      a[tmp$ = j, j = tmp$ + 1 | 0, tmp$] = this.queue_0[i];
      i = this.next_0(i);
    }
    this.queue_0 = a;
    this.head_0 = 0;
    this.tail_0 = j;
  };
  Queue.prototype.next_0 = function ($receiver) {
    var j = $receiver + 1 | 0;
    return j === this.queue_0.length ? 0 : j;
  };
  Queue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Queue',
    interfaces: []
  };
  function Job() {
    Job$Key_getInstance();
  }
  Job.prototype.cancel_dbl4no$ = function (cause, callback$default) {
    if (cause === void 0)
      cause = null;
    return callback$default ? callback$default(cause) : this.cancel_dbl4no$$default(cause);
  };
  Job.prototype.invokeOnCompletion_ct2b2z$ = function (onCancelling, invokeImmediately, handler, callback$default) {
    if (onCancelling === void 0)
      onCancelling = false;
    if (invokeImmediately === void 0)
      invokeImmediately = true;
    return callback$default ? callback$default(onCancelling, invokeImmediately, handler) : this.invokeOnCompletion_ct2b2z$$default(onCancelling, invokeImmediately, handler);
  };
  function Job$Key() {
    Job$Key_instance = this;
  }
  Job$Key.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Key',
    interfaces: [CoroutineContext$Key]
  };
  var Job$Key_instance = null;
  function Job$Key_getInstance() {
    if (Job$Key_instance === null) {
      new Job$Key();
    }
    return Job$Key_instance;
  }
  Job.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Job',
    interfaces: [CoroutineContext$Element]
  };
  function Job_0(parent) {
    if (parent === void 0)
      parent = null;
    return new JobImpl(parent);
  }
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DisposableHandle',
    interfaces: []
  };
  function cancel($receiver, cause) {
    if (cause === void 0)
      cause = null;
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = $receiver.get_8oh8b3$(Job$Key_getInstance())) != null ? tmp$.cancel_dbl4no$(cause) : null) != null ? tmp$_0 : false;
  }
  function cancelChildren($receiver, cause) {
    if (cause === void 0)
      cause = null;
    var tmp$;
    (tmp$ = $receiver.get_8oh8b3$(Job$Key_getInstance())) != null ? (cancelChildren_0(tmp$, cause), Unit) : null;
  }
  function disposeOnCompletion$lambda(closure$handle) {
    return function (it) {
      closure$handle.dispose();
      return Unit;
    };
  }
  function disposeOnCompletion($receiver, handle) {
    return $receiver.invokeOnCompletion_ct2b2z$(void 0, void 0, disposeOnCompletion$lambda(handle));
  }
  function cancelAndJoin($receiver, continuation) {
    $receiver.cancel_dbl4no$();
    return $receiver.join(continuation);
  }
  function cancelChildren_0($receiver, cause) {
    if (cause === void 0)
      cause = null;
    var tmp$;
    tmp$ = $receiver.children.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.cancel_dbl4no$(cause);
    }
  }
  function joinChildren($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$joinChildren($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$joinChildren($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$joinChildren.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$joinChildren.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$joinChildren.prototype.constructor = Coroutine$joinChildren;
  Coroutine$joinChildren.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$$receiver.children.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var element = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = element.join(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.dispose = function () {
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NonDisposableHandle',
    interfaces: [DisposableHandle]
  };
  var NonDisposableHandle_instance = null;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance === null) {
      new NonDisposableHandle();
    }
    return NonDisposableHandle_instance;
  }
  function JobSupport(active) {
    this.state_8be2vx$_cigt0v$_0 = active ? EmptyActive : EmptyNew;
    this.parentHandle_0 = null;
  }
  Object.defineProperty(JobSupport.prototype, 'key', {
    get: function () {
      return Job$Key_getInstance();
    }
  });
  Object.defineProperty(JobSupport.prototype, 'state_8be2vx$', {
    get: function () {
      return this.state_8be2vx$_cigt0v$_0;
    },
    set: function (state) {
      this.state_8be2vx$_cigt0v$_0 = state;
    }
  });
  JobSupport.prototype.initParentJobInternal_x4lgmv$ = function (parent) {
    if (!(this.parentHandle_0 == null)) {
      var message = 'Shall be invoked at most once';
      throw IllegalStateException_init(message.toString());
    }
    if (parent == null) {
      this.parentHandle_0 = NonDisposableHandle_getInstance();
      return;
    }
    parent.start();
    var handle = parent.attachChild_r3p3g3$(this);
    this.parentHandle_0 = handle;
    if (this.isCompleted) {
      handle.dispose();
      this.parentHandle_0 = NonDisposableHandle_getInstance();
    }
  };
  Object.defineProperty(JobSupport.prototype, 'isActive', {
    get: function () {
      var state = this.state_8be2vx$;
      return Kotlin.isType(state, JobSupport$Incomplete) && state.isActive;
    }
  });
  Object.defineProperty(JobSupport.prototype, 'isCompleted', {
    get: function () {
      return !Kotlin.isType(this.state_8be2vx$, JobSupport$Incomplete);
    }
  });
  Object.defineProperty(JobSupport.prototype, 'isCancelled', {
    get: function () {
      var state = this.state_8be2vx$;
      return Kotlin.isType(state, Cancelled) || (Kotlin.isType(state, JobSupport$Finishing) && state.cancelled != null);
    }
  });
  JobSupport.prototype.updateState_42w2xh$ = function (proposedUpdate, mode) {
    var tmp$;
    var state = Kotlin.isType(tmp$ = this.state_8be2vx$, JobSupport$Incomplete) ? tmp$ : throwCCE();
    var update = this.coerceProposedUpdate_0(state, proposedUpdate);
    this.tryUpdateState_8ea4ql$(update);
    this.completeUpdateState_v83ddl$(state, update, mode);
  };
  JobSupport.prototype.tryUpdateState_8ea4ql$ = function (update) {
    var tmp$;
    if (!!Kotlin.isType(update, JobSupport$Incomplete)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    this.state_8be2vx$ = update;
    if ((tmp$ = this.parentHandle_0) != null) {
      tmp$.dispose();
      this.parentHandle_0 = NonDisposableHandle_getInstance();
    }
  };
  JobSupport.prototype.coerceProposedUpdate_0 = function (expect, proposedUpdate) {
    return Kotlin.isType(expect, JobSupport$Finishing) && expect.cancelled != null && !this.isCorrespondinglyCancelled_0(expect.cancelled, proposedUpdate) ? this.createCancelled_0(expect.cancelled, proposedUpdate) : proposedUpdate;
  };
  JobSupport.prototype.isCorrespondinglyCancelled_0 = function (cancelled, proposedUpdate) {
    if (!Kotlin.isType(proposedUpdate, Cancelled))
      return false;
    return equals(proposedUpdate.cause, cancelled.cause) || (Kotlin.isType(proposedUpdate.cause, JobCancellationException) && cancelled.cause == null);
  };
  JobSupport.prototype.createCancelled_0 = function (cancelled, proposedUpdate) {
    if (!Kotlin.isType(proposedUpdate, CompletedExceptionally))
      return cancelled;
    var exception = proposedUpdate.exception;
    if (equals(cancelled.exception, exception))
      return cancelled;
    return new Cancelled(this, exception);
  };
  JobSupport.prototype.completeUpdateState_v83ddl$ = function (expect, update, mode) {
    var tmp$, tmp$_0;
    var exceptionally = Kotlin.isType(tmp$ = update, CompletedExceptionally) ? tmp$ : null;
    if (!this.get_isCancelling_0(expect))
      this.onCancellationInternal_kybjp5$(exceptionally);
    this.onCompletionInternal_cypnoy$(update, mode);
    var cause = exceptionally != null ? exceptionally.cause : null;
    if (Kotlin.isType(expect, JobNode)) {
      try {
        expect.invoke_dbl4no$(cause);
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          this.handleException_tcv7n7$(new CompletionHandlerException('Exception in completion handler ' + expect + ' for ' + this, ex));
        }
         else
          throw ex;
      }
    }
     else {
      (tmp$_0 = expect.list) != null ? (this.notifyCompletion_0(tmp$_0, cause), Unit) : null;
    }
  };
  JobSupport.prototype.notifyHandlers_0 = wrapFunction(function () {
    var equals = Kotlin.equals;
    return function (T_0, isT, list, cause) {
      var tmp$;
      var exception = {v: null};
      var cur = list.next;
      while (!equals(cur, list)) {
        if (isT(cur)) {
          var node = cur;
          var tmp$_0;
          try {
            node.invoke_dbl4no$(cause);
          }
           catch (ex) {
            if (Kotlin.isType(ex, Throwable)) {
              if (((tmp$_0 = exception.v) != null ? tmp$_0 : null) == null) {
                ex;
                exception.v = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + this, ex);
              }
            }
             else
              throw ex;
          }
        }
        cur = cur.next;
      }
      if ((tmp$ = exception.v) != null) {
        this.handleException_tcv7n7$(tmp$);
      }
    };
  });
  JobSupport.prototype.notifyCompletion_0 = function ($receiver, cause) {
    var tmp$;
    var exception = {v: null};
    var cur = $receiver.next;
    while (!equals(cur, $receiver)) {
      if (Kotlin.isType(cur, JobNode)) {
        var node = cur;
        var tmp$_0;
        try {
          node.invoke_dbl4no$(cause);
        }
         catch (ex) {
          if (Kotlin.isType(ex, Throwable)) {
            if (((tmp$_0 = exception.v) != null ? tmp$_0 : null) == null) {
              ex;
              exception.v = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + this, ex);
            }
          }
           else
            throw ex;
        }
      }
      cur = cur.next;
    }
    if ((tmp$ = exception.v) != null) {
      this.handleException_tcv7n7$(tmp$);
    }
  };
  JobSupport.prototype.notifyCancellation_0 = function (list, cause) {
    var tmp$;
    var exception = {v: null};
    var cur = list.next;
    while (!equals(cur, list)) {
      if (Kotlin.isType(cur, JobCancellationNode)) {
        var node = cur;
        var tmp$_0;
        try {
          node.invoke_dbl4no$(cause);
        }
         catch (ex) {
          if (Kotlin.isType(ex, Throwable)) {
            if (((tmp$_0 = exception.v) != null ? tmp$_0 : null) == null) {
              ex;
              exception.v = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + this, ex);
            }
          }
           else
            throw ex;
        }
      }
      cur = cur.next;
    }
    if ((tmp$ = exception.v) != null) {
      this.handleException_tcv7n7$(tmp$);
    }
  };
  JobSupport.prototype.start = function () {
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, Empty)) {
      if (state.isActive)
        return false;
      this.state_8be2vx$ = EmptyActive;
      this.onStartInternal();
      return true;
    }
     else if (Kotlin.isType(state, JobSupport$NodeList)) {
      var $receiver = state.makeActive();
      if ($receiver)
        this.onStartInternal();
      return $receiver;
    }
     else
      return false;
  };
  JobSupport.prototype.onStartInternal = function () {
  };
  JobSupport.prototype.getCancellationException = function () {
    var tmp$;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, JobSupport$Finishing) && state.cancelled != null)
      tmp$ = this.toCancellationException_0(state.cancelled.exception, 'Job is being cancelled');
    else if (Kotlin.isType(state, JobSupport$Incomplete)) {
      throw IllegalStateException_init(('Job was not completed or cancelled yet: ' + this).toString());
    }
     else if (Kotlin.isType(state, CompletedExceptionally))
      tmp$ = this.toCancellationException_0(state.exception, 'Job has failed');
    else
      tmp$ = new JobCancellationException('Job has completed normally', null, this);
    return tmp$;
  };
  JobSupport.prototype.toCancellationException_0 = function ($receiver, message) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, CancellationException) ? tmp$ : null) != null ? tmp$_0 : new JobCancellationException(message, $receiver, this);
  };
  JobSupport.prototype.getCompletionCause_0 = function () {
    var tmp$;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, JobSupport$Finishing) && state.cancelled != null)
      tmp$ = state.cancelled.cause;
    else if (Kotlin.isType(state, JobSupport$Incomplete)) {
      throw IllegalStateException_init('Job was not completed or cancelled yet'.toString());
    }
     else if (Kotlin.isType(state, CompletedExceptionally))
      tmp$ = state.cause;
    else
      tmp$ = null;
    return tmp$;
  };
  JobSupport.prototype.invokeOnCompletion_ct2b2z$$default = function (onCancelling, invokeImmediately, handler) {
    return this.installNode_0(onCancelling, invokeImmediately, this.makeNode_0(handler, onCancelling));
  };
  JobSupport.prototype.installNode_0 = function (onCancelling, invokeImmediately, node) {
    var tmp$, tmp$_0, tmp$_1;
    while (true) {
      var state = this.state_8be2vx$;
      if (Kotlin.isType(state, Empty))
        if (state.isActive) {
          this.state_8be2vx$ = node;
          return node;
        }
         else
          this.promoteEmptyToNodeList_0(state);
      else if (Kotlin.isType(state, JobSupport$Incomplete)) {
        var list = state.list;
        if (list == null) {
          this.promoteSingleToNodeList_0(Kotlin.isType(tmp$ = state, JobNode) ? tmp$ : throwCCE());
        }
         else {
          if (Kotlin.isType(state, JobSupport$Finishing) && state.cancelled != null && onCancelling) {
            if (!(this.onCancelMode !== ON_CANCEL_MAKE_CANCELLED)) {
              var message = 'Check failed.';
              throw IllegalStateException_init(message.toString());
            }
            if (invokeImmediately)
              node.invoke_dbl4no$(state.cancelled.cause);
            return NonDisposableHandle_getInstance();
          }
          list.addLast_tsj8n4$(node);
          return node;
        }
      }
       else {
        if (invokeImmediately) {
          node.invoke_dbl4no$((tmp$_1 = Kotlin.isType(tmp$_0 = state, CompletedExceptionally) ? tmp$_0 : null) != null ? tmp$_1.cause : null);
        }
        return NonDisposableHandle_getInstance();
      }
    }
  };
  JobSupport.prototype.makeNode_0 = function (handler, onCancelling) {
    var hasCancellingState = this.onCancelMode !== ON_CANCEL_MAKE_CANCELLED;
    return onCancelling && hasCancellingState ? new InvokeOnCancellation(this, handler) : new InvokeOnCompletion(this, handler);
  };
  JobSupport.prototype.promoteEmptyToNodeList_0 = function (state) {
    if (!(state === this.state_8be2vx$)) {
      var message = 'Expected empty state';
      throw IllegalStateException_init(message.toString());
    }
    this.state_8be2vx$ = new JobSupport$NodeList(state.isActive);
  };
  JobSupport.prototype.promoteSingleToNodeList_0 = function (state) {
    if (!(state === this.state_8be2vx$)) {
      var message = 'Expected single state';
      throw IllegalStateException_init(message.toString());
    }
    var list = new JobSupport$NodeList(true);
    list.addLast_tsj8n4$(state);
    this.state_8be2vx$ = list;
  };
  function JobSupport$join$lambda(cont) {
    checkCompletion(cont.context);
    return Unit;
  }
  JobSupport.prototype.join = function (continuation_0, suspended) {
    var instance = new Coroutine$join(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$join($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$join.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$join.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$join.prototype.constructor = Coroutine$join;
  Coroutine$join.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!this.$this.joinInternal_0()) {
              this.state_0 = 2;
              this.result_0 = JobSupport$join$lambda(this.facade);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.$this.joinSuspend_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JobSupport.prototype.joinInternal_0 = function () {
    if (!Kotlin.isType(this.state_8be2vx$, JobSupport$Incomplete))
      return false;
    this.start();
    return true;
  };
  function JobSupport$joinSuspend$lambda$lambda(closure$cont) {
    return function (it) {
      closure$cont.resume_11rb$(Unit);
      return Unit;
    };
  }
  function JobSupport$joinSuspend$lambda$lambda_0(closure$handle) {
    return function (it) {
      closure$handle.dispose();
      return Unit;
    };
  }
  function JobSupport$joinSuspend$lambda(this$JobSupport) {
    return function (cont) {
      var handle = this$JobSupport.invokeOnCompletion_ct2b2z$(void 0, void 0, JobSupport$joinSuspend$lambda$lambda(cont));
      cont.invokeOnCompletion_f05bi3$(JobSupport$joinSuspend$lambda$lambda_0(handle));
      return Unit;
    };
  }
  function suspendCancellableCoroutine$lambda_0(closure$holdCancellability, closure$block) {
    return function (cont) {
      var cancellable = new CancellableContinuationImpl(cont, package$experimental.MODE_CANCELLABLE);
      if (!closure$holdCancellability)
        cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  JobSupport.prototype.joinSuspend_0 = function (continuation) {
    return suspendCancellableCoroutine$lambda_0(false, JobSupport$joinSuspend$lambda(this))(continuation.facade);
  };
  JobSupport.prototype.removeNode_29b37s$ = function (node) {
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, JobNode)) {
      if (state !== node)
        return;
      this.state_8be2vx$ = EmptyActive;
    }
     else if (Kotlin.isType(state, JobSupport$Incomplete))
      if (state.list != null)
        node.remove();
  };
  Object.defineProperty(JobSupport.prototype, 'onCancelMode', {
    get: function () {
      return ON_CANCEL_MAKE_CANCELLING;
    }
  });
  JobSupport.prototype.cancel_dbl4no$$default = function (cause) {
    switch (this.onCancelMode) {
      case 0:
        return this.makeCancelled_0(cause);
      case 1:
        return this.makeCancelling_0(cause);
      case 2:
        return this.makeCompletingOnCancel_0(cause);
      default:throw IllegalStateException_init(('Invalid onCancelMode ' + this.onCancelMode).toString());
    }
  };
  JobSupport.prototype.updateStateCancelled_0 = function (cause) {
    this.updateState_42w2xh$(new Cancelled(this, cause), MODE_ATOMIC_DEFAULT);
  };
  JobSupport.prototype.makeCancelled_0 = function (cause) {
    if (!Kotlin.isType(this.state_8be2vx$, JobSupport$Incomplete))
      return false;
    this.updateStateCancelled_0(cause);
    return true;
  };
  JobSupport.prototype.makeCancelling_0 = function (cause) {
    while (true) {
      var state = this.state_8be2vx$;
      if (Kotlin.isType(state, Empty))
        if (state.isActive) {
          this.promoteEmptyToNodeList_0(state);
        }
         else {
          this.updateStateCancelled_0(cause);
          return true;
        }
       else if (Kotlin.isType(state, JobNode))
        this.promoteSingleToNodeList_0(state);
      else if (Kotlin.isType(state, JobSupport$NodeList))
        if (state.isActive) {
          this.makeCancellingList_0(state.list, cause);
          return true;
        }
         else {
          this.updateStateCancelled_0(cause);
          return true;
        }
       else if (Kotlin.isType(state, JobSupport$Finishing)) {
        if (state.cancelled != null)
          return false;
        this.makeCancellingList_0(state.list, cause);
        return true;
      }
       else {
        return false;
      }
    }
  };
  JobSupport.prototype.makeCancellingList_0 = function (list, cause) {
    var cancelled = new Cancelled(this, cause);
    this.state_8be2vx$ = new JobSupport$Finishing(list, cancelled, false);
    this.onFinishingInternal_s8jyv4$(cancelled);
    this.onCancellationInternal_kybjp5$(cancelled);
    this.notifyCancellation_0(list, cause);
  };
  JobSupport.prototype.makeCompletingOnCancel_0 = function (cause) {
    return this.makeCompleting_8ea4ql$(new Cancelled(this, cause));
  };
  JobSupport.prototype.makeCompleting_8ea4ql$ = function (proposedUpdate) {
    if (this.makeCompletingInternal_0(proposedUpdate, MODE_ATOMIC_DEFAULT) === COMPLETING_ALREADY_COMPLETING)
      return false;
    else
      return true;
  };
  JobSupport.prototype.makeCompletingOnce_42w2xh$ = function (proposedUpdate, mode) {
    switch (this.makeCompletingInternal_0(proposedUpdate, mode)) {
      case 1:
        return true;
      case 2:
        return false;
      default:throw IllegalStateException_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), this.get_exceptionOrNull_0(proposedUpdate));
    }
  };
  JobSupport.prototype.makeCompletingInternal_0 = function (proposedUpdate, mode) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    loop: while (true) {
      var state = this.state_8be2vx$;
      if (!Kotlin.isType(state, JobSupport$Incomplete))
        return COMPLETING_ALREADY_COMPLETING;
      if (Kotlin.isType(state, JobSupport$Finishing) && state.completing)
        return COMPLETING_ALREADY_COMPLETING;
      tmp$_0 = this.firstChild_0(state);
      if (tmp$_0 == null) {
        if (!Kotlin.isType(state, JobSupport$Finishing) && this.hasOnFinishingHandler_s8jyv4$(proposedUpdate))
          tmp$ = null;
        else {
          this.updateState_42w2xh$(proposedUpdate, mode);
          return COMPLETING_COMPLETED;
        }
        tmp$_0 = tmp$;
      }
      var child = tmp$_0;
      tmp$_1 = state.list;
      if (tmp$_1 == null) {
        if (Kotlin.isType(state, Empty)) {
          this.promoteEmptyToNodeList_0(state);
          continue loop;
        }
         else if (Kotlin.isType(state, JobNode)) {
          this.promoteSingleToNodeList_0(state);
          continue loop;
        }
         else {
          throw IllegalStateException_init(('Unexpected state with an empty list: ' + toString(state)).toString());
        }
      }
      var list = tmp$_1;
      if (Kotlin.isType(proposedUpdate, CompletedExceptionally))
        child != null ? (this.cancelChildrenInternal_0(child, proposedUpdate.exception), Unit) : null;
      var completing = new JobSupport$Finishing(list, (tmp$_3 = Kotlin.isType(tmp$_2 = state, JobSupport$Finishing) ? tmp$_2 : null) != null ? tmp$_3.cancelled : null, true);
      this.state_8be2vx$ = completing;
      if (!Kotlin.isType(state, JobSupport$Finishing))
        this.onFinishingInternal_s8jyv4$(proposedUpdate);
      if (child != null && this.tryWaitForChild_0(child, proposedUpdate))
        return COMPLETING_WAITING_CHILDREN;
      this.updateState_42w2xh$(proposedUpdate, MODE_ATOMIC_DEFAULT);
      return COMPLETING_COMPLETED;
    }
  };
  JobSupport.prototype.cancelChildrenInternal_0 = function ($receiver, cause) {
    var tmp$;
    $receiver.childJob.cancel_dbl4no$(new JobCancellationException('Child job was cancelled because of parent failure', cause, $receiver.childJob));
    (tmp$ = this.nextChild_0($receiver)) != null ? (this.cancelChildrenInternal_0(tmp$, cause), Unit) : null;
  };
  JobSupport.prototype.get_exceptionOrNull_0 = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, CompletedExceptionally) ? tmp$ : null) != null ? tmp$_0.exception : null;
  };
  JobSupport.prototype.firstChild_0 = function (state) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = Kotlin.isType(tmp$ = state, Child) ? tmp$ : null) != null ? tmp$_1 : (tmp$_0 = state.list) != null ? this.nextChild_0(tmp$_0) : null;
  };
  function JobSupport$tryWaitForChild$lambda(closure$child, closure$proposedUpdate, this$JobSupport) {
    return function (it) {
      this$JobSupport.continueCompleting_bc4je1$(closure$child, closure$proposedUpdate);
      return Unit;
    };
  }
  JobSupport.prototype.tryWaitForChild_0 = function (child, proposedUpdate) {
    var tmp$;
    var handle = child.childJob.invokeOnCompletion_ct2b2z$(void 0, false, JobSupport$tryWaitForChild$lambda(child, proposedUpdate, this));
    if (handle !== NonDisposableHandle_getInstance())
      return true;
    tmp$ = this.nextChild_0(child);
    if (tmp$ == null) {
      return false;
    }
    var nextChild = tmp$;
    return this.tryWaitForChild_0(nextChild, proposedUpdate);
  };
  JobSupport.prototype.continueCompleting_bc4je1$ = function (lastChild, proposedUpdate) {
    var state = this.state_8be2vx$;
    if (!Kotlin.isType(state, JobSupport$Finishing))
      throw IllegalStateException_0('Job ' + this + ' is found in expected state while completing with ' + toString(proposedUpdate), this.get_exceptionOrNull_0(proposedUpdate));
    var waitChild = this.nextChild_0(lastChild);
    if (waitChild != null && this.tryWaitForChild_0(waitChild, proposedUpdate))
      return;
    this.updateState_42w2xh$(proposedUpdate, MODE_ATOMIC_DEFAULT);
  };
  JobSupport.prototype.nextChild_0 = function ($receiver) {
    var cur = $receiver;
    while (cur.isRemoved)
      cur = cur.prev;
    while (true) {
      cur = cur.next;
      if (Kotlin.isType(cur, Child))
        return cur;
      if (Kotlin.isType(cur, JobSupport$NodeList))
        return null;
    }
  };
  function JobSupport$get_JobSupport$children$lambda(this$JobSupport_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JobSupport$get_JobSupport$children$lambda(this$JobSupport_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JobSupport$get_JobSupport$children$lambda(this$JobSupport_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$JobSupport = this$JobSupport_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$cur = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$JobSupport$get_JobSupport$children$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JobSupport$get_JobSupport$children$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JobSupport$get_JobSupport$children$lambda.prototype.constructor = Coroutine$JobSupport$get_JobSupport$children$lambda;
  Coroutine$JobSupport$get_JobSupport$children$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var state = this.local$this$JobSupport.state_8be2vx$;
            if (Kotlin.isType(state, Child)) {
              this.state_0 = 8;
              this.result_0 = this.local$$receiver.yield_11rb$(state.childJob, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(state, JobSupport$Incomplete)) {
                if ((this.local$tmp$ = state.list) != null) {
                  this.local$cur = this.local$tmp$.next;
                  this.state_0 = 2;
                  continue;
                }
                 else {
                  this.local$tmp$_0 = null;
                  this.state_0 = 6;
                  continue;
                }
              }
               else {
                this.state_0 = 7;
                continue;
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (equals(this.local$cur, this.local$tmp$)) {
              this.state_0 = 5;
              continue;
            }

            if (Kotlin.isType(this.local$cur, Child)) {
              this.state_0 = 3;
              this.result_0 = this.local$$receiver.yield_11rb$(this.local$cur.childJob, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.local$cur = this.local$cur.next;
            this.state_0 = 2;
            continue;
          case 5:
            this.local$tmp$_0 = Unit;
            this.state_0 = 6;
            continue;
          case 6:
            return this.local$tmp$_0;
          case 7:
            this.state_0 = 9;
            continue;
          case 8:
            return this.result_0;
          case 9:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Object.defineProperty(JobSupport.prototype, 'children', {
    get: function () {
      return buildSequence(JobSupport$get_JobSupport$children$lambda(this));
    }
  });
  JobSupport.prototype.attachChild_r3p3g3$ = function (child) {
    return this.installNode_0(true, true, new Child(this, child));
  };
  JobSupport.prototype.handleException_tcv7n7$ = function (exception) {
    throw exception;
  };
  JobSupport.prototype.onCancellationInternal_kybjp5$ = function (exceptionally) {
  };
  JobSupport.prototype.hasOnFinishingHandler_s8jyv4$ = function (update) {
    return false;
  };
  JobSupport.prototype.onFinishingInternal_s8jyv4$ = function (update) {
  };
  JobSupport.prototype.onCompletionInternal_cypnoy$ = function (state, mode) {
  };
  JobSupport.prototype.toString = function () {
    return this.nameString() + '{' + this.stateString_0() + '}';
  };
  JobSupport.prototype.nameString = function () {
    return get_classSimpleName(this);
  };
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder;
  JobSupport.prototype.stateString_0 = function () {
    var tmp$;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, JobSupport$Finishing)) {
      var $receiver = new StringBuilder_init();
      if (state.cancelled != null)
        $receiver.append_gw00v9$('Cancelling');
      if (state.completing)
        $receiver.append_gw00v9$('Completing');
      tmp$ = $receiver.toString();
    }
     else if (Kotlin.isType(state, JobSupport$Incomplete))
      tmp$ = state.isActive ? 'Active' : 'New';
    else if (Kotlin.isType(state, Cancelled))
      tmp$ = 'Cancelled';
    else if (Kotlin.isType(state, CompletedExceptionally))
      tmp$ = 'CompletedExceptionally';
    else
      tmp$ = 'Completed';
    return tmp$;
  };
  function JobSupport$Incomplete() {
  }
  JobSupport$Incomplete.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Incomplete',
    interfaces: []
  };
  function JobSupport$Finishing(list, cancelled, completing) {
    this.list_7ikv57$_0 = list;
    this.cancelled = cancelled;
    this.completing = completing;
  }
  Object.defineProperty(JobSupport$Finishing.prototype, 'list', {
    get: function () {
      return this.list_7ikv57$_0;
    }
  });
  Object.defineProperty(JobSupport$Finishing.prototype, 'isActive', {
    get: function () {
      return this.cancelled == null;
    }
  });
  JobSupport$Finishing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Finishing',
    interfaces: [JobSupport$Incomplete]
  };
  JobSupport.prototype.get_isCancelling_0 = function ($receiver) {
    return Kotlin.isType($receiver, JobSupport$Finishing) && $receiver.cancelled != null;
  };
  function JobSupport$NodeList(isActive) {
    LinkedListHead.call(this);
    this.isActive_lghlzm$_0 = isActive;
  }
  Object.defineProperty(JobSupport$NodeList.prototype, 'isActive', {
    get: function () {
      return this.isActive_lghlzm$_0;
    },
    set: function (isActive) {
      this.isActive_lghlzm$_0 = isActive;
    }
  });
  Object.defineProperty(JobSupport$NodeList.prototype, 'list', {
    get: function () {
      return this;
    }
  });
  JobSupport$NodeList.prototype.makeActive = function () {
    if (this.isActive)
      return false;
    this.isActive = true;
    return true;
  };
  JobSupport$NodeList.prototype.toString = function () {
    var $receiver = new StringBuilder_init();
    $receiver.append_gw00v9$('List');
    $receiver.append_gw00v9$(this.isActive ? '{Active}' : '{New}');
    $receiver.append_gw00v9$('[');
    var first = {v: true};
    var cur = this.next;
    while (!equals(cur, this)) {
      if (Kotlin.isType(cur, JobNode)) {
        var node = cur;
        if (first.v)
          first.v = false;
        else
          $receiver.append_gw00v9$(', ');
        $receiver.append_s8jyv4$(node);
      }
      cur = cur.next;
    }
    $receiver.append_gw00v9$(']');
    return $receiver.toString();
  };
  JobSupport$NodeList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeList',
    interfaces: [JobSupport$Incomplete, LinkedListHead]
  };
  Object.defineProperty(JobSupport.prototype, 'isCompletedExceptionally', {
    get: function () {
      return Kotlin.isType(this.state_8be2vx$, CompletedExceptionally);
    }
  });
  JobSupport.prototype.getCompletionExceptionOrNull = function () {
    var state = this.state_8be2vx$;
    if (!!Kotlin.isType(state, JobSupport$Incomplete)) {
      var message = 'This job has not completed yet';
      throw IllegalStateException_init(message.toString());
    }
    return this.get_exceptionOrNull_0(state);
  };
  JobSupport.prototype.getCompletedInternal_8be2vx$ = function () {
    var state = this.state_8be2vx$;
    if (!!Kotlin.isType(state, JobSupport$Incomplete)) {
      var message = 'This job has not completed yet';
      throw IllegalStateException_init(message.toString());
    }
    if (Kotlin.isType(state, CompletedExceptionally))
      throw state.exception;
    return state;
  };
  JobSupport.prototype.awaitInternal_8be2vx$ = function (continuation) {
    var state = this.state_8be2vx$;
    if (!Kotlin.isType(state, JobSupport$Incomplete)) {
      if (Kotlin.isType(state, CompletedExceptionally))
        throw state.exception;
      return state;
    }
    this.start();
    return this.awaitSuspend_0(continuation);
  };
  function JobSupport$awaitSuspend$lambda$lambda(this$JobSupport, closure$cont) {
    return function (it) {
      var state = this$JobSupport.state_8be2vx$;
      if (!!Kotlin.isType(state, JobSupport$Incomplete)) {
        var message = 'State should be complete ';
        throw IllegalStateException_init(message.toString());
      }
      if (Kotlin.isType(state, CompletedExceptionally))
        closure$cont.resumeWithException_tcv7n7$(state.exception);
      else
        closure$cont.resume_11rb$(state);
      return Unit;
    };
  }
  function JobSupport$awaitSuspend$lambda$lambda_0(closure$handle) {
    return function (it) {
      closure$handle.dispose();
      return Unit;
    };
  }
  function JobSupport$awaitSuspend$lambda(this$JobSupport) {
    return function (cont) {
      var handle = this$JobSupport.invokeOnCompletion_ct2b2z$(void 0, void 0, JobSupport$awaitSuspend$lambda$lambda(this$JobSupport, cont));
      cont.invokeOnCompletion_f05bi3$(JobSupport$awaitSuspend$lambda$lambda_0(handle));
      return Unit;
    };
  }
  JobSupport.prototype.awaitSuspend_0 = function (continuation) {
    return suspendCancellableCoroutine$lambda_0(false, JobSupport$awaitSuspend$lambda(this))(continuation.facade);
  };
  JobSupport.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JobSupport',
    interfaces: [Job]
  };
  var ON_CANCEL_MAKE_CANCELLED;
  var ON_CANCEL_MAKE_CANCELLING;
  var ON_CANCEL_MAKE_COMPLETING;
  var COMPLETING_ALREADY_COMPLETING;
  var COMPLETING_COMPLETED;
  var COMPLETING_WAITING_CHILDREN;
  var EmptyNew;
  var EmptyActive;
  function Empty(isActive) {
    this.isActive_6b1bzz$_0 = isActive;
  }
  Object.defineProperty(Empty.prototype, 'isActive', {
    get: function () {
      return this.isActive_6b1bzz$_0;
    }
  });
  Object.defineProperty(Empty.prototype, 'list', {
    get: function () {
      return null;
    }
  });
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.isActive ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Empty',
    interfaces: [JobSupport$Incomplete]
  };
  function JobImpl(parent) {
    if (parent === void 0)
      parent = null;
    JobSupport.call(this, true);
    this.initParentJobInternal_x4lgmv$(parent);
  }
  Object.defineProperty(JobImpl.prototype, 'onCancelMode', {
    get: function () {
      return ON_CANCEL_MAKE_COMPLETING;
    }
  });
  JobImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JobImpl',
    interfaces: [JobSupport]
  };
  function JobNode(job) {
    LinkedListNode.call(this);
    this.job = job;
  }
  Object.defineProperty(JobNode.prototype, 'isActive', {
    get: function () {
      return true;
    }
  });
  Object.defineProperty(JobNode.prototype, 'list', {
    get: function () {
      return null;
    }
  });
  JobNode.prototype.dispose = function () {
    var tmp$;
    (Kotlin.isType(tmp$ = this.job, JobSupport) ? tmp$ : throwCCE()).removeNode_29b37s$(this);
  };
  JobNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JobNode',
    interfaces: [JobSupport$Incomplete, DisposableHandle, LinkedListNode]
  };
  function InvokeOnCompletion(job, handler) {
    JobNode.call(this, job);
    this.handler_0 = handler;
  }
  InvokeOnCompletion.prototype.invoke_dbl4no$ = function (reason) {
    this.handler_0(reason);
  };
  InvokeOnCompletion.prototype.toString = function () {
    return 'InvokeOnCompletion';
  };
  InvokeOnCompletion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvokeOnCompletion',
    interfaces: [JobNode]
  };
  function JobCancellationNode(job) {
    JobNode.call(this, job);
  }
  JobCancellationNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JobCancellationNode',
    interfaces: [JobNode]
  };
  function InvokeOnCancellation(job, handler) {
    JobCancellationNode.call(this, job);
    this.handler_0 = handler;
    this.invoked_0 = false;
  }
  InvokeOnCancellation.prototype.invoke_dbl4no$ = function (reason) {
    if (this.invoked_0)
      return;
    this.invoked_0 = true;
    this.handler_0(reason);
  };
  InvokeOnCancellation.prototype.toString = function () {
    return 'InvokeOnCancellation';
  };
  InvokeOnCancellation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvokeOnCancellation',
    interfaces: [JobCancellationNode]
  };
  function Child(parent, childJob) {
    JobCancellationNode.call(this, parent);
    this.childJob = childJob;
  }
  Child.prototype.invoke_dbl4no$ = function (reason) {
    this.childJob.cancel_dbl4no$(this.job.getCancellationException());
  };
  Child.prototype.toString = function () {
    return 'Child[' + this.childJob + ']';
  };
  Child.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Child',
    interfaces: [JobCancellationNode]
  };
  function NonCancellable() {
    NonCancellable_instance = this;
    AbstractCoroutineContextElement.call(this, Job$Key_getInstance());
  }
  Object.defineProperty(NonCancellable.prototype, 'isActive', {
    get: function () {
      return true;
    }
  });
  Object.defineProperty(NonCancellable.prototype, 'isCompleted', {
    get: function () {
      return false;
    }
  });
  Object.defineProperty(NonCancellable.prototype, 'isCancelled', {
    get: function () {
      return false;
    }
  });
  NonCancellable.prototype.start = function () {
    return false;
  };
  NonCancellable.prototype.join = function (continuation) {
    throw UnsupportedOperationException_init_0('This job is always active');
  };
  NonCancellable.prototype.getCancellationException = function () {
    throw IllegalStateException_init('This job is always active');
  };
  NonCancellable.prototype.invokeOnCompletion_ct2b2z$$default = function (onCancelling, invokeImmediately, handler) {
    return NonDisposableHandle_getInstance();
  };
  NonCancellable.prototype.cancel_dbl4no$$default = function (cause) {
    return false;
  };
  Object.defineProperty(NonCancellable.prototype, 'children', {
    get: function () {
      return emptySequence();
    }
  });
  NonCancellable.prototype.attachChild_r3p3g3$ = function (child) {
    return NonDisposableHandle_getInstance();
  };
  NonCancellable.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NonCancellable',
    interfaces: [Job, AbstractCoroutineContextElement]
  };
  var NonCancellable_instance = null;
  function NonCancellable_getInstance() {
    if (NonCancellable_instance === null) {
      new NonCancellable();
    }
    return NonCancellable_instance;
  }
  function promise(context, start, parent, block) {
    if (context === void 0)
      context = DefaultDispatcher;
    if (start === void 0)
      start = CoroutineStart$DEFAULT_getInstance();
    if (parent === void 0)
      parent = null;
    return asPromise(async(context, start, parent, block));
  }
  function asPromise$lambda$lambda(this$asPromise, closure$reject, closure$resolve) {
    return function (it) {
      var e = this$asPromise.getCompletionExceptionOrNull();
      if (e != null) {
        closure$reject(e);
      }
       else {
        closure$resolve(this$asPromise.getCompleted());
      }
      return Unit;
    };
  }
  function asPromise$lambda(this$asPromise) {
    return function (resolve, reject) {
      this$asPromise.invokeOnCompletion_ct2b2z$(void 0, void 0, asPromise$lambda$lambda(this$asPromise, reject, resolve));
      return Unit;
    };
  }
  function asPromise($receiver) {
    var promise = new Promise(asPromise$lambda($receiver));
    promise.deferred = $receiver;
    return promise;
  }
  function asDeferred$lambda(this$asDeferred_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$asDeferred$lambda(this$asDeferred_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$asDeferred$lambda(this$asDeferred_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$asDeferred = this$asDeferred_0;
  }
  Coroutine$asDeferred$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$asDeferred$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$asDeferred$lambda.prototype.constructor = Coroutine$asDeferred$lambda;
  Coroutine$asDeferred$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$asDeferred, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function asDeferred($receiver) {
    var deferred = $receiver.deferred;
    return deferred != null ? deferred : async(void 0, CoroutineStart$UNDISPATCHED_getInstance(), void 0, asDeferred$lambda($receiver));
  }
  function await$lambda$lambda(closure$cont) {
    return function (it) {
      closure$cont.resume_11rb$(it);
      return Unit;
    };
  }
  function await$lambda$lambda_0(closure$cont) {
    return function (it) {
      closure$cont.resumeWithException_tcv7n7$(it);
      return Unit;
    };
  }
  function await$lambda(this$await) {
    return function (cont) {
      this$await.then(await$lambda$lambda(cont), await$lambda$lambda_0(cont));
      return Unit;
    };
  }
  function suspendCancellableCoroutine$lambda_1(closure$holdCancellability, closure$block) {
    return function (cont) {
      var cancellable = new CancellableContinuationImpl(cont, package$experimental.MODE_CANCELLABLE);
      if (!closure$holdCancellability)
        cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  function await_0($receiver, continuation) {
    return suspendCancellableCoroutine$lambda_1(false, await$lambda($receiver))(continuation.facade);
  }
  function withTimeout$lambda(closure$time, closure$block) {
    return function (cont) {
      return setupTimeout(new TimeoutCoroutine(closure$time, cont), closure$block);
    };
  }
  function withTimeout(time, block, continuation) {
    if (!(time >= 0)) {
      var message = 'Timeout time ' + time + ' cannot be negative';
      throw IllegalArgumentException_init(message.toString());
    }
    if (Kotlin.Long.fromInt(time).compareTo_11rb$(Kotlin.Long.ZERO) <= 0)
      throw new CancellationException('Timed out immediately');
    return withTimeout$lambda(time, block)(continuation.facade);
  }
  function setupTimeout(coroutine, block) {
    var cont = coroutine.cont;
    var context = cont.context;
    disposeOnCompletion(coroutine, get_delay(context).invokeOnTimeout_ebrsoh$(coroutine.time, coroutine));
    return startUndispatchedOrReturn_0(coroutine, coroutine, block);
  }
  function TimeoutCoroutine(time, cont) {
    AbstractCoroutine.call(this, cont.context, true);
    this.time = time;
    this.cont = cont;
  }
  Object.defineProperty(TimeoutCoroutine.prototype, 'defaultResumeMode', {
    get: function () {
      return MODE_DIRECT;
    }
  });
  TimeoutCoroutine.prototype.run = function () {
    this.cancel_dbl4no$(TimeoutCancellationException_0(this.time, this));
  };
  TimeoutCoroutine.prototype.onCompletionInternal_cypnoy$ = function (state, mode) {
    var tmp$;
    if (Kotlin.isType(state, CompletedExceptionally))
      resumeWithExceptionMode(this.cont, state.exception, mode);
    else {
      resumeMode(this.cont, (tmp$ = state) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), mode);
    }
  };
  TimeoutCoroutine.prototype.toString = function () {
    return 'TimeoutCoroutine(' + this.time + ')';
  };
  TimeoutCoroutine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeoutCoroutine',
    interfaces: [Runnable, AbstractCoroutine, Continuation]
  };
  function withTimeoutOrNull$lambda(closure$time, closure$block) {
    return function (cont) {
      return setupTimeout(new TimeoutOrNullCoroutine(closure$time, cont), closure$block);
    };
  }
  function withTimeoutOrNull(time, block, continuation) {
    if (!(time >= 0)) {
      var message = 'Timeout time ' + time + ' cannot be negative';
      throw IllegalArgumentException_init(message.toString());
    }
    if (Kotlin.Long.fromInt(time).compareTo_11rb$(Kotlin.Long.ZERO) <= 0)
      return null;
    return withTimeoutOrNull$lambda(time, block)(continuation.facade);
  }
  function TimeoutOrNullCoroutine(time, cont) {
    TimeoutCoroutine.call(this, time, cont);
  }
  TimeoutOrNullCoroutine.prototype.onCompletionInternal_cypnoy$ = function (state, mode) {
    var tmp$;
    if (Kotlin.isType(state, CompletedExceptionally)) {
      var exception = state.exception;
      if (Kotlin.isType(exception, TimeoutCancellationException) && exception.coroutine_8be2vx$ === this)
        resumeMode(this.cont, null, mode);
      else
        resumeWithExceptionMode(this.cont, exception, mode);
    }
     else {
      resumeMode(this.cont, (tmp$ = state) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), mode);
    }
  };
  TimeoutOrNullCoroutine.prototype.toString = function () {
    return 'TimeoutOrNullCoroutine(' + this.time + ')';
  };
  TimeoutOrNullCoroutine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeoutOrNullCoroutine',
    interfaces: [TimeoutCoroutine]
  };
  function asCoroutineDispatcher($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver.coroutineDispatcher) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver_0 = new WindowDispatcher($receiver);
      $receiver.coroutineDispatcher = $receiver_0;
      tmp$_0 = $receiver_0;
    }
    return tmp$_0;
  }
  function awaitAnimationFrame$lambda(this$awaitAnimationFrame) {
    return function (cont) {
      asWindowAnimationQueue(this$awaitAnimationFrame).enqueue_rv82kq$(cont);
      return Unit;
    };
  }
  function suspendCancellableCoroutine$lambda_2(closure$holdCancellability, closure$block) {
    return function (cont) {
      var cancellable = new CancellableContinuationImpl(cont, package$experimental.MODE_CANCELLABLE);
      if (!closure$holdCancellability)
        cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  function awaitAnimationFrame($receiver, continuation) {
    return suspendCancellableCoroutine$lambda_2(false, awaitAnimationFrame$lambda($receiver))(continuation.facade);
  }
  function asWindowAnimationQueue($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver.coroutineAnimationQueue) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver_0 = new WindowAnimationQueue($receiver);
      $receiver.coroutineAnimationQueue = $receiver_0;
      tmp$_0 = $receiver_0;
    }
    return tmp$_0;
  }
  function WindowAnimationQueue(window_0) {
    this.window_0 = window_0;
    this.dispatcher_0 = asCoroutineDispatcher(this.window_0);
    this.scheduled_0 = false;
    this.current_0 = new Queue();
    this.next_0 = new Queue();
    this.timestamp_0 = 0.0;
  }
  function WindowAnimationQueue$enqueue$lambda(this$WindowAnimationQueue) {
    return function (ts) {
      this$WindowAnimationQueue.timestamp_0 = ts;
      var prev = this$WindowAnimationQueue.current_0;
      this$WindowAnimationQueue.current_0 = this$WindowAnimationQueue.next_0;
      this$WindowAnimationQueue.next_0 = prev;
      this$WindowAnimationQueue.scheduled_0 = false;
      this$WindowAnimationQueue.process();
      return Unit;
    };
  }
  WindowAnimationQueue.prototype.enqueue_rv82kq$ = function (cont) {
    this.next_0.add_trkh7z$(cont);
    if (!this.scheduled_0) {
      this.scheduled_0 = true;
      this.window_0.requestAnimationFrame(WindowAnimationQueue$enqueue$lambda(this));
    }
  };
  WindowAnimationQueue.prototype.process = function () {
    var tmp$;
    while (true) {
      tmp$ = this.current_0.poll();
      if (tmp$ == null) {
        return;
      }
      var element = tmp$;
      element.resumeUndispatched_276mab$(this.dispatcher_0, this.timestamp_0);
    }
  };
  WindowAnimationQueue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WindowAnimationQueue',
    interfaces: []
  };
  function yield$lambda(cont) {
    var context = cont.context;
    checkCompletion(context);
    if (!Kotlin.isType(cont, DispatchedContinuation))
      return Unit;
    if (!cont.dispatcher.isDispatchNeeded_dvqyjb$(context))
      return Unit;
    cont.dispatchYield_1c3m6u$(Unit);
    return COROUTINE_SUSPENDED;
  }
  function yield_0(continuation) {
    return yield$lambda(continuation.facade);
  }
  function checkCompletion($receiver) {
    var job = $receiver.get_8oh8b3$(Job$Key_getInstance());
    if (job != null && !job.isActive)
      throw job.getCancellationException();
  }
  function LinkedListNode() {
    this.next_deapq1$_0 = this;
    this.prev_dfm7p5$_0 = this;
    this.isRemoved_e8k21e$_0 = false;
    this.isFresh = this.next === this;
  }
  Object.defineProperty(LinkedListNode.prototype, 'next', {
    get: function () {
      return this.next_deapq1$_0;
    },
    set: function (next) {
      this.next_deapq1$_0 = next;
    }
  });
  Object.defineProperty(LinkedListNode.prototype, 'prev', {
    get: function () {
      return this.prev_dfm7p5$_0;
    },
    set: function (prev) {
      this.prev_dfm7p5$_0 = prev;
    }
  });
  Object.defineProperty(LinkedListNode.prototype, 'isRemoved', {
    get: function () {
      return this.isRemoved_e8k21e$_0;
    },
    set: function (isRemoved) {
      this.isRemoved_e8k21e$_0 = isRemoved;
    }
  });
  LinkedListNode.prototype.addLast_tsj8n4$ = function (node) {
    var prev = this.prev;
    node.next = this;
    node.prev = prev;
    prev.next = node;
    this.prev = node;
  };
  LinkedListNode.prototype.remove = function () {
    if (this.isRemoved)
      return false;
    var prev = this.prev;
    var next = this.next;
    prev.next = next;
    next.prev = prev;
    this.isRemoved = true;
    return true;
  };
  LinkedListNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedListNode',
    interfaces: []
  };
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  Object.defineProperty(LinkedListHead.prototype, 'isEmpty', {
    get: function () {
      return this.next === this;
    }
  });
  LinkedListHead.prototype.forEach_8jvfi5$ = defineInlineFunction('kotlinx-coroutines-core-js.kotlinx.coroutines.experimental.internal.LinkedListHead.forEach_8jvfi5$', wrapFunction(function () {
    var equals = Kotlin.equals;
    return function (T_0, isT, block) {
      var cur = this.next;
      while (!equals(cur, this)) {
        if (isT(cur))
          block(cur);
        cur = cur.next;
      }
    };
  }));
  LinkedListHead.prototype.remove = function () {
    throw UnsupportedOperationException_init();
  };
  LinkedListHead.prototype.removeFirstOrNull = function () {
    var node = this.next;
    if (node === this)
      return null;
    node.remove();
    return node;
  };
  LinkedListHead.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedListHead',
    interfaces: [LinkedListNode]
  };
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$coroutines = package$kotlinx.coroutines || (package$kotlinx.coroutines = {});
  var package$experimental = package$coroutines.experimental || (package$coroutines.experimental = {});
  package$experimental.AbstractCoroutine = AbstractCoroutine;
  package$experimental.CompletedExceptionally_init_tcv7n7$ = CompletedExceptionally_init;
  package$experimental.CompletedExceptionally = CompletedExceptionally;
  package$experimental.Cancelled = Cancelled;
  Object.defineProperty(CoroutineStart, 'DEFAULT', {
    get: CoroutineStart$DEFAULT_getInstance
  });
  Object.defineProperty(CoroutineStart, 'LAZY', {
    get: CoroutineStart$LAZY_getInstance
  });
  Object.defineProperty(CoroutineStart, 'ATOMIC', {
    get: CoroutineStart$ATOMIC_getInstance
  });
  Object.defineProperty(CoroutineStart, 'UNDISPATCHED', {
    get: CoroutineStart$UNDISPATCHED_getInstance
  });
  package$experimental.CoroutineStart = CoroutineStart;
  $$importsForInline$$['kotlinx-coroutines-core-js'] = _;
  package$experimental.withCoroutineContext_ms9kem$ = withCoroutineContext;
  package$experimental.DispatchedContinuation = DispatchedContinuation;
  package$experimental.resumeCancellable_seoz30$ = resumeCancellable;
  package$experimental.resumeCancellableWithException_nzgwnd$ = resumeCancellableWithException;
  package$experimental.resumeDirect_seoz30$ = resumeDirect;
  package$experimental.resumeDirectWithException_nzgwnd$ = resumeDirectWithException;
  package$experimental.DispatchedTask = DispatchedTask;
  package$experimental.dispatch_ku5vcm$ = dispatch;
  Object.defineProperty(package$experimental, 'MODE_ATOMIC_DEFAULT', {
    get: function () {
      return MODE_ATOMIC_DEFAULT;
    }
  });
  Object.defineProperty(package$experimental, 'MODE_CANCELLABLE', {
    get: function () {
      return MODE_CANCELLABLE;
    }
  });
  Object.defineProperty(package$experimental, 'MODE_DIRECT', {
    get: function () {
      return MODE_DIRECT;
    }
  });
  Object.defineProperty(package$experimental, 'MODE_UNDISPATCHED', {
    get: function () {
      return MODE_UNDISPATCHED;
    }
  });
  Object.defineProperty(package$experimental, 'MODE_IGNORE', {
    get: function () {
      return MODE_IGNORE;
    }
  });
  package$experimental.get_isCancellableMode_8e50z4$ = get_isCancellableMode;
  package$experimental.get_isDispatchedMode_8e50z4$ = get_isDispatchedMode;
  package$experimental.resumeMode_ym8jpa$ = resumeMode;
  package$experimental.resumeWithExceptionMode_ydqgjr$ = resumeWithExceptionMode;
  var package$internal = package$experimental.internal || (package$experimental.internal = {});
  package$internal.Symbol = Symbol;
  var package$intrinsics = package$experimental.intrinsics || (package$experimental.intrinsics = {});
  package$intrinsics.startCoroutineCancellable_xtwlez$ = startCoroutineCancellable;
  package$intrinsics.startCoroutineCancellable_uao1qo$ = startCoroutineCancellable_0;
  package$intrinsics.startCoroutineUndispatched_xtwlez$ = startCoroutineUndispatched;
  package$intrinsics.startCoroutineUndispatched_uao1qo$ = startCoroutineUndispatched_0;
  package$intrinsics.startUndispatchedOrReturn_4yh02o$ = startUndispatchedOrReturn;
  package$intrinsics.startUndispatchedOrReturn_ecekzd$ = startUndispatchedOrReturn_0;
  package$experimental.AbstractContinuation = AbstractContinuation;
  package$experimental.launch_ej4974$ = launch;
  package$experimental.withContext_xy9lwp$ = withContext;
  package$experimental.CancellableContinuation = CancellableContinuation;
  package$experimental.CancellableContinuationImpl = CancellableContinuationImpl;
  package$experimental.CompletableDeferred = CompletableDeferred;
  package$experimental.CompletableDeferred_br6pg6$ = CompletableDeferred_0;
  package$experimental.CompletableDeferred_mh5how$ = CompletableDeferred_1;
  Object.defineProperty(package$experimental, 'Unconfined', {
    get: Unconfined_getInstance
  });
  Object.defineProperty(package$experimental, 'DefaultDispatcher', {
    get: function () {
      return DefaultDispatcher;
    }
  });
  package$experimental.newCoroutineContext_y0hpzz$ = newCoroutineContext;
  package$experimental.toDebugString_34n6ex$ = toDebugString;
  package$experimental.get_coroutineName_3jfoph$ = get_coroutineName;
  package$experimental.CoroutineDispatcher = CoroutineDispatcher;
  package$experimental.Runnable = Runnable;
  package$experimental.handleCoroutineException_y5fbjc$ = handleCoroutineException;
  Object.defineProperty(CoroutineExceptionHandler, 'Key', {
    get: CoroutineExceptionHandler$Key_getInstance
  });
  package$experimental.CoroutineExceptionHandler = CoroutineExceptionHandler;
  package$experimental.CoroutineExceptionHandler_av07nd$ = CoroutineExceptionHandler_0;
  package$experimental.CoroutineScope = CoroutineScope;
  package$experimental.get_classSimpleName_8ea4r1$ = get_classSimpleName;
  package$experimental.Deferred = Deferred;
  package$experimental.async_nrwt9h$ = async;
  package$experimental.Delay = Delay;
  package$experimental.delay_za3lpa$ = delay;
  package$experimental.get_delay_3jfoph$ = get_delay;
  package$experimental.CompletionHandlerException = CompletionHandlerException;
  package$experimental.CancellationException = CancellationException;
  package$experimental.JobCancellationException = JobCancellationException;
  package$experimental.TimeoutCancellationException_init_61zpoe$ = TimeoutCancellationException_init;
  package$experimental.TimeoutCancellationException = TimeoutCancellationException;
  package$experimental.TimeoutCancellationException_82h4na$ = TimeoutCancellationException_0;
  package$experimental.DispatchException = DispatchException;
  package$experimental.IllegalStateException_ly7if3$ = IllegalStateException_0;
  package$experimental.NodeDispatcher = NodeDispatcher;
  package$experimental.WindowDispatcher = WindowDispatcher;
  package$experimental.MessageQueue = MessageQueue;
  package$experimental.Queue = Queue;
  Object.defineProperty(Job, 'Key', {
    get: Job$Key_getInstance
  });
  package$experimental.Job = Job;
  package$experimental.Job_c6qot0$ = Job_0;
  package$experimental.DisposableHandle = DisposableHandle;
  package$experimental.cancel_erq06s$ = cancel;
  package$experimental.cancelChildren_erq06s$ = cancelChildren;
  package$experimental.disposeOnCompletion_dwx8z6$ = disposeOnCompletion;
  package$experimental.cancelAndJoin_c6qotg$ = cancelAndJoin;
  package$experimental.cancelChildren_irwgr4$ = cancelChildren_0;
  package$experimental.joinChildren_c6qotg$ = joinChildren;
  Object.defineProperty(package$experimental, 'NonDisposableHandle', {
    get: NonDisposableHandle_getInstance
  });
  JobSupport.Incomplete = JobSupport$Incomplete;
  JobSupport.NodeList = JobSupport$NodeList;
  package$experimental.JobSupport = JobSupport;
  Object.defineProperty(package$experimental, 'ON_CANCEL_MAKE_CANCELLED_8be2vx$', {
    get: function () {
      return ON_CANCEL_MAKE_CANCELLED;
    }
  });
  Object.defineProperty(package$experimental, 'ON_CANCEL_MAKE_CANCELLING_8be2vx$', {
    get: function () {
      return ON_CANCEL_MAKE_CANCELLING;
    }
  });
  Object.defineProperty(package$experimental, 'ON_CANCEL_MAKE_COMPLETING_8be2vx$', {
    get: function () {
      return ON_CANCEL_MAKE_COMPLETING;
    }
  });
  package$experimental.JobNode = JobNode;
  package$experimental.JobCancellationNode = JobCancellationNode;
  package$experimental.Child = Child;
  Object.defineProperty(package$experimental, 'NonCancellable', {
    get: NonCancellable_getInstance
  });
  package$experimental.promise_nrwt9h$ = promise;
  package$experimental.asPromise_l87ck7$ = asPromise;
  package$experimental.asDeferred_t11jrl$ = asDeferred;
  package$experimental.await_t11jrl$ = await_0;
  package$experimental.withTimeout_dv38ag$ = withTimeout;
  package$experimental.withTimeoutOrNull_dv38ag$ = withTimeoutOrNull;
  package$experimental.asCoroutineDispatcher_nz12v2$ = asCoroutineDispatcher;
  package$experimental.awaitAnimationFrame_nz12v2$ = awaitAnimationFrame;
  package$experimental.yield = yield_0;
  package$experimental.checkCompletion_3jfoph$ = checkCompletion;
  package$internal.LinkedListNode = LinkedListNode;
  package$internal.LinkedListHead = LinkedListHead;
  Job.prototype.fold_m9u1mr$ = CoroutineContext$Element.prototype.fold_m9u1mr$;
  Job.prototype.get_8oh8b3$ = CoroutineContext$Element.prototype.get_8oh8b3$;
  Job.prototype.minusKey_ds72xk$ = CoroutineContext$Element.prototype.minusKey_ds72xk$;
  Job.prototype.plus_dvqyjb$ = CoroutineContext$Element.prototype.plus_dvqyjb$;
  JobSupport.prototype.fold_m9u1mr$ = Job.prototype.fold_m9u1mr$;
  JobSupport.prototype.get_8oh8b3$ = Job.prototype.get_8oh8b3$;
  JobSupport.prototype.minusKey_ds72xk$ = Job.prototype.minusKey_ds72xk$;
  JobSupport.prototype.plus_dvqyjb$ = Job.prototype.plus_dvqyjb$;
  JobSupport.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  JobSupport.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  DispatchedContinuation.prototype.getSuccessfulResult_tpy1pm$ = DispatchedTask.prototype.getSuccessfulResult_tpy1pm$;
  DispatchedContinuation.prototype.getExceptionalResult_s8jyv4$ = DispatchedTask.prototype.getExceptionalResult_s8jyv4$;
  DispatchedContinuation.prototype.run = DispatchedTask.prototype.run;
  AbstractContinuation.prototype.getSuccessfulResult_tpy1pm$ = DispatchedTask.prototype.getSuccessfulResult_tpy1pm$;
  AbstractContinuation.prototype.getExceptionalResult_s8jyv4$ = DispatchedTask.prototype.getExceptionalResult_s8jyv4$;
  AbstractContinuation.prototype.run = DispatchedTask.prototype.run;
  CancellableContinuationImpl.prototype.tryResume_19pj23$ = CancellableContinuation.prototype.tryResume_19pj23$;
  Deferred.prototype.fold_m9u1mr$ = Job.prototype.fold_m9u1mr$;
  Deferred.prototype.get_8oh8b3$ = Job.prototype.get_8oh8b3$;
  Deferred.prototype.minusKey_ds72xk$ = Job.prototype.minusKey_ds72xk$;
  Deferred.prototype.plus_dvqyjb$ = Job.prototype.plus_dvqyjb$;
  Deferred.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  Deferred.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  CompletableDeferred.prototype.fold_m9u1mr$ = Deferred.prototype.fold_m9u1mr$;
  CompletableDeferred.prototype.get_8oh8b3$ = Deferred.prototype.get_8oh8b3$;
  CompletableDeferred.prototype.minusKey_ds72xk$ = Deferred.prototype.minusKey_ds72xk$;
  CompletableDeferred.prototype.plus_dvqyjb$ = Deferred.prototype.plus_dvqyjb$;
  CompletableDeferred.prototype.cancel_dbl4no$ = Deferred.prototype.cancel_dbl4no$;
  CompletableDeferred.prototype.invokeOnCompletion_ct2b2z$ = Deferred.prototype.invokeOnCompletion_ct2b2z$;
  CoroutineExceptionHandler.prototype.fold_m9u1mr$ = CoroutineContext$Element.prototype.fold_m9u1mr$;
  CoroutineExceptionHandler.prototype.get_8oh8b3$ = CoroutineContext$Element.prototype.get_8oh8b3$;
  CoroutineExceptionHandler.prototype.minusKey_ds72xk$ = CoroutineContext$Element.prototype.minusKey_ds72xk$;
  CoroutineExceptionHandler.prototype.plus_dvqyjb$ = CoroutineContext$Element.prototype.plus_dvqyjb$;
  NonCancellable.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  NonCancellable.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  UNDEFINED = new Symbol('UNDEFINED');
  MODE_ATOMIC_DEFAULT = 0;
  MODE_CANCELLABLE = 1;
  MODE_DIRECT = 2;
  MODE_UNDISPATCHED = 3;
  MODE_IGNORE = 4;
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  var tmp$;
  var tmp$_0 = !equals(typeof window, 'undefined');
  if (tmp$_0) {
    tmp$_0 = !equals(typeof window.addEventListener, 'undefined');
  }
  if (tmp$_0)
    tmp$ = asCoroutineDispatcher(window);
  else
    tmp$ = new NodeDispatcher();
  DefaultDispatcher = tmp$;
  ON_CANCEL_MAKE_CANCELLED = 0;
  ON_CANCEL_MAKE_CANCELLING = 1;
  ON_CANCEL_MAKE_COMPLETING = 2;
  COMPLETING_ALREADY_COMPLETING = 0;
  COMPLETING_COMPLETED = 1;
  COMPLETING_WAITING_CHILDREN = 2;
  EmptyNew = new Empty(false);
  EmptyActive = new Empty(true);
  Kotlin.defineModule('kotlinx-coroutines-core-js', _);
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core-js.js.map
